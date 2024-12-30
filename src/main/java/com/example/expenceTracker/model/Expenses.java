package com.example.expenceTracker.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Entity
@NoArgsConstructor
@Data
@Table(name="expense")
public class Expenses {

    @Id
    private Long id;

    private Instant expenseDate;

    private String description;

    private String location;

    private Long amount;

    @ManyToOne
    private Category category;

    @JsonIgnore
    @ManyToOne
    private Users users;


}