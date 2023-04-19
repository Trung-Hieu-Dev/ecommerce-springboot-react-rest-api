package com.ray.api.controller;

import com.ray.api.dao.ProductRepository;
import com.ray.api.dto.ProductReturnDto;
import com.ray.api.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/products")
public class ProductController {
    private final ProductRepository productRepository;

    @Autowired
    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping
    public ResponseEntity<List<ProductReturnDto>> getAllProducts() {
        List<Product> products = productRepository.findAll();
//        List<ProductReturnDto> returnDtoList = new ArrayList<>();
//
//        for (Product p : products) {
//            ProductReturnDto productReturnDto = new ProductReturnDto(p);
//            returnDtoList.add(productReturnDto);
//        }

        List<ProductReturnDto> returnDtoList =
                products.stream().map(product -> new ProductReturnDto(product)).collect(Collectors.toList());

        return new ResponseEntity<>(returnDtoList, HttpStatus.OK);
    }
}