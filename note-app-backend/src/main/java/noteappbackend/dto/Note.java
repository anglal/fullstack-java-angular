package noteappbackend.dto;

import java.util.Date;

public class Note {
	private Integer id;
	private String title;
	private String body;
	private Date dateCreated;
    private Boolean important;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
	public Date getDateCreated() {
		return dateCreated;
	}
	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}
	public Boolean getImportant() {
		return important;
	}
	public void setImportant(Boolean important) {
		this.important = important;
	}
	@Override
	public String toString() {
		return "Note [id=" + id + ", title=" + title + ", body=" + body + ", dateCreated=" + dateCreated
				+ ", important=" + important + "]";
	}
	
}
