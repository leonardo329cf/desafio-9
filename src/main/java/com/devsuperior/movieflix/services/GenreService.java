package com.devsuperior.movieflix.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.movieflix.dto.GenreDto;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.repositories.GenreRepository;

@Service
public class GenreService {

	@Autowired
	private GenreRepository _genreRepository;
	
	public List<GenreDto> findAll() {
		List<Genre> entityList = _genreRepository.findAll();
		return entityList.stream().map(entity -> new GenreDto(entity)).collect(Collectors.toList());
	}
}
