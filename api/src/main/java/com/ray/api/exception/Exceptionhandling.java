package com.ray.api.exception;

import com.ray.api.dto.HttpResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.NoHandlerFoundException;

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

//    @ExceptionHandler(Exception.class)
//    public ResponseEntity<HttpResponse> internalServerErrorException(Exception ex) {
//        return createHttpResponse(HttpStatus.INTERNAL_SERVER_ERROR, ex.getMessage());

//        return new ResponseEntity<>(
//                new HttpResponse(
//                        HttpStatus.INTERNAL_SERVER_ERROR.value(),
//                        HttpStatus.INTERNAL_SERVER_ERROR,
//                        HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(),
//                        ex.getMessage()),
//                HttpStatus.INTERNAL_SERVER_ERROR
//        );
//    }

    private ResponseEntity<HttpResponse> createHttpResponse(HttpStatus httpStatus, String message) {
        HttpResponse httpResponse = new HttpResponse(
                                        httpStatus.value(),
                                        httpStatus,
                                        httpStatus.getReasonPhrase(),
                                        message
                                    );
        return new ResponseEntity<>(httpResponse, httpStatus);
    }
}
