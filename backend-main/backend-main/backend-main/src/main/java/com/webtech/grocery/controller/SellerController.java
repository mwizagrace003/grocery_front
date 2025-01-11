package com.webtech.grocery.controller;

import com.webtech.grocery.model.Product;
import com.webtech.grocery.service.ProductService;
import com.webtech.grocery.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;



@CrossOrigin(origins = {"http://localhost:5173"})
@RestController
@RequestMapping("/seller")
public class SellerController {

    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public List<Product> getSellerProducts(@RequestParam Long sellerId) {
        return productService.getProductsBySellerId(sellerId);
    }

    @PostMapping("/products")
    public Product addProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @PutMapping("/products/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
        return productService.updateProduct(id, product);
    }

    @DeleteMapping("/products/{id}")
    public String deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return "Product deleted successfully!";
    }
}
