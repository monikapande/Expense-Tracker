package com.example.expenceTracker.controller;

import com.example.expenceTracker.model.Category;
import com.example.expenceTracker.model.Expenses;
import com.example.expenceTracker.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.List;

@Controller
@RequestMapping("/api")
public class ExpenseController {

    @Autowired
    ExpenseRepository expenseRepository;

    @GetMapping("/expenses")
    ResponseEntity<Collection<Expenses>> getAllExpenses(){
        List<Expenses> expensesList = expenseRepository.findAll();
        return ResponseEntity.ok(expensesList);
    }

    @DeleteMapping("/expenses/{id}")
    ResponseEntity<?> deleteExpenses(@PathVariable Long id) {
        expenseRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/expenses")
    ResponseEntity<Expenses> createExpense(@RequestBody Expenses expenses) throws URISyntaxException{
        Expenses result = expenseRepository.save(expenses);
        return ResponseEntity.created(new URI("/api/expenses"+result.getId())).body(result);
    }
}
