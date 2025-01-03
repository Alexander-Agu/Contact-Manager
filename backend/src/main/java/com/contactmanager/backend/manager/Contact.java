package com.contactmanager.backend.manager;

import jakarta.persistence.*;

@Entity
@Table(
        name = "manager",
        uniqueConstraints = @UniqueConstraint(
                name = "emailid_address",
                columnNames = "email_address"
        )
)
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_sequence")
    @SequenceGenerator(name = "id_sequence", sequenceName = "id_sequence", allocationSize = 1)
    private Long id;
    private String name;

    @Column(name = "email_address", nullable = false)
    private String email;
    @Column(nullable = false)
    private String phone;

    public Contact(){

    }

    public Contact(String email, String phone, String name) {
        this.email = email;
        this.phone = phone;
        this.name = name;
    }


    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }


    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
}