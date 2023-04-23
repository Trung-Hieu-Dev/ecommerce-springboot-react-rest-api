package com.ray.api.dto;

import com.ray.api.entity.Product;
import com.ray.api.entity.ProductCategory;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Date;

@Getter
@Setter
public class ProductReturnDto {
    private long id;
    private String name;
    private String description;
    private String brand;
    private BigDecimal unitPrice;
    private String imageUrl;
    private int unitsInStock;
    private String category;

    public ProductReturnDto() {
    }
    public ProductReturnDto(Product product) {
        this.id = product.getId();
        this.name = product.getName();
        this.description = product.getDescription();
        this.brand = product.getBrand();
        this.unitPrice = product.getUnitPrice();
        this.imageUrl = product.getImageUrl();
        this.unitsInStock = product.getUnitsInStock();
        this.category = product.getCategory().getCategoryName();
    }
}
