package com.webtech.grocery.service;

import com.webtech.grocery.model.Grocery;
import com.webtech.grocery.userRepository.GroceryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroceryService {

    private final GroceryRepository furnitureRepository;

    public GroceryService(GroceryRepository furnitureRepository) {
        this.furnitureRepository = furnitureRepository;
    }

    public void saveAll(List<Grocery> furnitureList) {
        furnitureRepository.saveAll(furnitureList);
    }

    public List<Grocery> getAllFurniture() {
        return furnitureRepository.findAll();
    }
}