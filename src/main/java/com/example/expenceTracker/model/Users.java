package com.example.expenceTracker.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "USERS")
public class Users {

    @Id
    private Long id;

    private String  name;

    private String email;
}
