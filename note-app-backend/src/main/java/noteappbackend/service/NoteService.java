package noteappbackend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import noteappbackend.dto.Note;
import noteappbackend.entity.NoteEntity;
import noteappbackend.repository.NoteRepository;

@Service
public class NoteService {
	private NoteRepository noteRepository;
	
	public NoteService(NoteRepository noteRepository) {
		this.noteRepository = noteRepository;
	}
	
	public List<Note> getNotes() {
		List<NoteEntity> noteEntities = noteRepository.findAll();
		
		List<Note> noteDtos = new ArrayList<>();
		
		
		for(NoteEntity noteEntity: noteEntities) {
			Note noteDto = new Note();
			BeanUtils.copyProperties(noteEntity, noteDto);
			noteDtos.add(noteDto);
		}
		return noteDtos;
	}

	public Note getNote(int noteId) {
		NoteEntity noteEntity = this.noteRepository.findById(noteId).get();
		Note noteDto = new Note();
		BeanUtils.copyProperties(noteEntity, noteDto);
		return noteDto;
	}

	public Note createNote(Note note) {
		NoteEntity noteEntity = new NoteEntity();
		BeanUtils.copyProperties(note, noteEntity);
		NoteEntity noteEntityReturned = this.noteRepository.save(noteEntity);
		Note noteReturned = new Note();
		BeanUtils.copyProperties(noteEntityReturned, noteReturned);
		return noteReturned;
	}

	public Note edit(Integer noteId, Note note) {
		try {
			NoteEntity noteFound = this.noteRepository.findById(noteId).get();

			if(null != note.getTitle()) {
				noteFound.setTitle(note.getTitle());
			}
			if(null != note.getBody()) {
				noteFound.setBody(note.getBody());
			}	
			if(null != note.getImportant()) {
				noteFound.setImportant(note.getImportant());
			}
			
			NoteEntity returnedNoteEntity = this.noteRepository.save(noteFound);
			Note returnedNote = new Note();
			BeanUtils.copyProperties(returnedNoteEntity, returnedNote);
			return returnedNote;
		} catch (NoSuchElementException e) {
			return null;
		}

	}

	public void deleteNote(Integer noteId) {
		this.noteRepository.deleteById(noteId);
	}

}
