package noteappbackend.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

	@GetMapping("/notes/{id}")
	private Note getNote(@PathVariable("id") int noteId) {
		try {
			return this.noteService.getNote(noteId);
		} catch (NoSuchElementException e) {
			return null;
		}

	}
	
	@PostMapping("/notes")
	public Note createNote(@RequestBody Note note) {
		return this.noteService.createNote(note);
	}
	
	@PatchMapping("/notes/{id}")
	public Note editNote(@PathVariable("id") Integer noteId, @RequestBody Note note) {
		return this.noteService.edit(noteId, note);
	}
	
	@DeleteMapping("/notes/{id}")
	public void deleteNote(@PathVariable("id") Integer noteId) {
		this.noteService.deleteNote(noteId);
	}
}
