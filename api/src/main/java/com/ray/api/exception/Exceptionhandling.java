package com.ray.api.exception;

import com.ray.api.dto.HttpResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.NoHandlerFoundException;

import javax.persistence.NoResultException;
import java.util.NoSuchElementException;

@RestControllerAdvice
public class Exceptionhandling {

    //404 error
    @ExceptionHandler(NoHandlerFoundException.class)
    public ResponseEntity<HttpResponse> noHandlerFoundException() {
//        return new ResponseEntity<>(
//                new HttpResponse(
//                    HttpStatus.NOT_FOUND.value(),
//                    HttpStatus.NOT_FOUND,
//                    HttpStatus.NOT_FOUND.getReasonPhrase(),
//                    "There is no mapping for this URL"),
//                HttpStatus.NOT_FOUND
//        );
        return createHttpResponse(HttpStatus.NOT_FOUND, "There is no mapping for this URL");

    }


    // error 500
    @ExceptionHandler(Exception.class)
    public ResponseEntity<HttpResponse> internalServerErrorException(Exception ex) {
        if (ex instanceof MethodArgumentNotValidException) {
            MethodArgumentNotValidException exception = (MethodArgumentNotValidException) ex;
            StringBuilder errors = new StringBuilder();
            exception.getBindingResult().getAllErrors().forEach((error) -> {
                String message = error.getDefaultMessage();
                errors.append(message + "; ");
            });

            return createHttpResponse(HttpStatus.BAD_REQUEST, errors.toString());
        }
        return createHttpResponse(HttpStatus.INTERNAL_SERVER_ERROR, ex.getMessage());
    }

    private ResponseEntity<HttpResponse> createHttpResponse(HttpStatus httpStatus, String message) {
        HttpResponse httpResponse = new HttpResponse(
                                        httpStatus.value(),
                                        httpStatus,
                                        httpStatus.getReasonPhrase(),
                                        message
                                    );
        return new ResponseEntity<>(httpResponse, httpStatus);
    }

    @ExceptionHandler(NoResultException.class)
    public ResponseEntity<HttpResponse> noResultException(NoResultException exception) {
        return createHttpResponse(HttpStatus.NOT_FOUND, exception.getMessage());
    }

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<HttpResponse> noSuchElementException(NoSuchElementException exception) {
        return createHttpResponse(HttpStatus.NOT_FOUND, exception.getMessage());
    }
}
