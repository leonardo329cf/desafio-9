package com.devsuperior.movieflix.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class ReviewService {
	
	@Autowired
	private ReviewRepository repository;
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private AuthService authService;

	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {
		Review entity = new Review();
		
		Movie movie = movieRepository.getOne(dto.getMovieId());
		if(movie == null) { 
			throw new ResourceNotFoundException("No movie with id: " + dto.getMovieId());
		}
		User user = authService.authenticated();
		
		entity.setMovie(movie);
		entity.setText(dto.getText());
		entity.setUser(user);
		
		entity = repository.save(entity);
		
		return new ReviewDTO(entity);		
	}

	@Transactional(readOnly = true)
	public List<ReviewDTO> findByMovieId(Long id) {
		Movie movie = movieRepository.getOne(id);
		if(movie == null) { 
			throw new ResourceNotFoundException("No movie with id: " + id);
		}
		return repository.findByMovieId(id).stream().map(entity -> new ReviewDTO(entity)).collect(Collectors.toList());
	}	
}