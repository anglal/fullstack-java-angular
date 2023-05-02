package noteappbackend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import noteappbackend.dto.Note;
import noteappbackend.service.NoteService;

@RestController
@RequestMapping("/")
public class NoteController {
private NoteService noteService;

public NoteController(NoteService noteService) {
	this.noteService = noteService;
}

@GetMapping("/notes")	
public List<Note> getNotes() {
	return this.noteService.getNotes();
}
}
