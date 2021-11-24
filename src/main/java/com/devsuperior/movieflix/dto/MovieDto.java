package com.devsuperior.movieflix.dto;

import java.io.Serializable;
import java.util.Objects;

import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;

public class MovieDto implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String title;
	private String subTitle;
	private Integer year;
	private String imgUrl;

	private String synopsis;

	private GenreDto genre;
	
	public MovieDto() {
		
	}

	public MovieDto(Long id, String title, String subTitle, Integer year, String imgUrl, String synopsis, Genre genre) {
		super();
		this.id = id;
		this.title = title;
		this.subTitle = subTitle;
		this.year = year;
		this.imgUrl = imgUrl;
		this.synopsis = synopsis;
		this.genre = new GenreDto(genre);
	}

	public MovieDto(Movie entity) {
		this.id = entity.getId();
		this.title = entity.getTitle();
		this.subTitle = entity.getSubTitle();
		this.year = entity.getYear();
		this.imgUrl = entity.getImgUrl();
		this.synopsis = entity.getSynopsis();
		this.genre = new GenreDto(entity.getGenre());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getSubTitle() {
		return subTitle;
	}

	public void setSubTitle(String subTitle) {
		this.subTitle = subTitle;
	}

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public String getSynopsis() {
		return synopsis;
	}

	public void setSynopsis(String synopsis) {
		this.synopsis = synopsis;
	}

	public GenreDto getGenre() {
		return genre;
	}

	public void setGenre(GenreDto genre) {
		this.genre = genre;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		MovieDto other = (MovieDto) obj;
		return Objects.equals(id, other.id);
	}

	@Override
	public String toString() {
		return "MovieDto [id=" + id + ", title=" + title + ", subTitle=" + subTitle + ", year=" + year + ", imgUrl="
				+ imgUrl + ", synopsis=" + synopsis + ", genre=" + genre + "]";
	}
}
