package com.example.expenceTracker.repository;

import com.example.expenceTracker.model.Category;
import com.example.expenceTracker.model.Expenses;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository<Expenses,Long> {
}
