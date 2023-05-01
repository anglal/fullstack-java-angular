package noteappbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import noteappbackend.dto.Note;

@RestController
@RequestMapping("/")
public class NoteController {

@GetMapping("/notes")	
public Note getNote() {
	Note test = new Note();
	test.setId(1);
	test.setTitle("First Note");
	test.setBody("First Body");
	return test;
}
}
