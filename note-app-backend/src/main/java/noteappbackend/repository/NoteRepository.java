package noteappbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import noteappbackend.entity.NoteEntity;

public interface NoteRepository extends JpaRepository<NoteEntity,Integer>{

}
