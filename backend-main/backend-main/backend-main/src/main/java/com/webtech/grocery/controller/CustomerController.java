package com.webtech.grocery.controller;


import com.webtech.grocery.model.Product;
import com.webtech.grocery.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;



@CrossOrigin(origins = {"http://localhost:5173"})
@RestController
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public List<Product> viewAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/products/{id}")
    public Product viewProductDetails(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @PostMapping("/purchase")
    public String purchaseProduct(@RequestParam Long productId, @RequestParam Long customerId) {
        // Implement purchase logic
        return "Purchase successful!";
    }
}
