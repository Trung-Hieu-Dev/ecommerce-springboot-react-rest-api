package com.ray.api.controller;

import com.ray.api.dto.HttpResponse;
import com.ray.api.entity.Buggy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.NoHandlerFoundException;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/buggy")
@CrossOrigin("http://localhost:3000")
public class BuggyController {

    @PostMapping("validate-error")
    public ResponseEntity<Buggy> createValidationError(@Valid @RequestBody Buggy buggy) {
        System.out.println(buggy);
        return new ResponseEntity<>(buggy, HttpStatus.CREATED);
    }

    // fake errors to test
    ///404 fake error
    @GetMapping("404")
    public ResponseEntity<HttpResponse> returnError404ForTesting() {
        return createHttpResponse(HttpStatus.NOT_FOUND, "There is no mapping for this URL");

    }

    ///500 fake error
    @GetMapping("500")
    public ResponseEntity<HttpResponse> returnError500ForTesting() {

        return createHttpResponse(HttpStatus.INTERNAL_SERVER_ERROR, "Internal server error");

    }

    /// reused method
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
