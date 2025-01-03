package com.contactmanager.backend.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactService {
    @Autowired
    private ContactRepository contactRepository;


    public List<Contact> getContacts(){
        return contactRepository.findAll();
    }


    public void saveContact(Contact contact){
        Optional<Contact> findbyEmail = contactRepository.findContactByEmail(contact.getEmail());
        if (!findbyEmail.isPresent()) {
            contactRepository.save(contact);
        }
    }


    public void deleteStudent(Long id){
        boolean contactId = contactRepository.existsById(id);
        if(!contactId){
            throw  new IllegalStateException("Contact does not exist");
        }
        contactRepository.deleteById(id);
    }
}
