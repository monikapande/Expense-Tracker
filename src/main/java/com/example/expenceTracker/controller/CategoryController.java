package com.example.expenceTracker.controller;

import com.example.expenceTracker.model.Category;
import com.example.expenceTracker.repository.CategoryRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/api")
public class CategoryController {
    private static final Logger log = LoggerFactory.getLogger(CategoryController.class);
    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/categories")
    ResponseEntity<Collection<Category>> categories(){
        List<Category> categoryDTOs = categoryRepository.findAll();
        return ResponseEntity.ok(categoryDTOs);
    }

    //category/2
    @GetMapping("/category/{id}")
    ResponseEntity<?> getCategory(@PathVariable Long id){
        Optional<Category> category = categoryRepository.findById(id);
        return category.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));

    }



    @PostMapping("/category")
    ResponseEntity<Category> createCategory(@RequestBody Category category) throws URISyntaxException {
        Category result= categoryRepository.save(category);
        return ResponseEntity.created(new URI("/api/category")).body(result);

    }


    @PutMapping("/category/{id}")
    ResponseEntity<Category> updateCategory(@RequestBody Category category){
        Category result= categoryRepository.save(category);
        return ResponseEntity.ok().body(result);
    }



    @DeleteMapping("/category/{id}")
    ResponseEntity<?> deleteCategory(@PathVariable Long id){
        categoryRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
