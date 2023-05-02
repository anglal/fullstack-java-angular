package noteappbackend.service;

import java.util.ArrayList;
import java.util.List;

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

}
