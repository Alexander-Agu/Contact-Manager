package com.contactmanager.backend.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactService {
    @Autowired
    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public List<Contact> getContacts(){
        return contactRepository.findAll();
    }

    public void saveContact(Contact contact){
        Optional<Contact> findbyEmail = contactRepository.findContactByEmail(contact.getEmail());
        if (!findbyEmail.isPresent()) {
            contactRepository.save(contact);
        }

    }
}
