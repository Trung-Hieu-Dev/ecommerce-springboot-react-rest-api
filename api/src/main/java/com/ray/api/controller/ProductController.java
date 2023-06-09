package com.ray.api.controller;

import com.ray.api.dao.ProductRepository;
import com.ray.api.dto.ProductReturnDto;
import com.ray.api.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/products")
@CrossOrigin("http://localhost:3000")
public class ProductController {
    private final ProductRepository productRepository;

    @Autowired
    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // product list
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

    // get product by id
    @GetMapping("/{productId}")
    public ResponseEntity<ProductReturnDto> getProductById(@PathVariable("productId") Long productId) {
        Product product = productRepository.findById(productId).get();
        return new ResponseEntity<>(new ProductReturnDto(product), HttpStatus.OK);
    }
}
