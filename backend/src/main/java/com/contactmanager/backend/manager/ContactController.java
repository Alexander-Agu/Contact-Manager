package com.contactmanager.backend.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/contactManager")
@CrossOrigin
public class ContactController {
    @Autowired // Gets the dependecies from the contract service class
    private final ContactService contactService;

    public ContactController(ContactService contactService){
        this.contactService = contactService;
    }

    // GET endpoint
    @GetMapping("/getContacts")
    public List<Contact> getContacts(){
        return contactService.getContacts();
    }

    // Post endpoint
    @PostMapping("/saveContact")
    public void postContact(@RequestBody Contact contact){
        contactService.saveContact(contact);
    }

    // Delete endpoint
    @DeleteMapping(path = "/{contactId}")
    public  void deleteContact(@PathVariable("contactId") Long id){
        contactService.deleteStudent(id);
    }
}
