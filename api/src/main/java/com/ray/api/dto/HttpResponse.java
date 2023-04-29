package com.ray.api.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.http.HttpStatus;

import java.util.Date;

@Data
public class HttpResponse {
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MM-dd-yy HH:mm:ss", timezone = "Asia/Ho_Chi_Minh")
    private Date timestamp;
    private int httpCode;
    private HttpStatus httpStatus;
    private String reason;
    private String message;

    public HttpResponse( int httpCode, HttpStatus httpStatus, String reason, String message) {
        this.timestamp = new Date();
        this.httpCode = httpCode;
        this.httpStatus = httpStatus;
        this.reason = reason;
        this.message = message;
    }
}
