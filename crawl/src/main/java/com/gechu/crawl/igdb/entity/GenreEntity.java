package com.gechu.crawl.igdb.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.gechu.crawl.igdb.dto.GenreDto;
import com.sun.istack.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor @AllArgsConstructor
@Entity
@Table(name = "genre")
@Builder
public class GenreEntity {

	@Id
	private Integer seq;

	@NotNull
	private String genreName;
	@NotNull
	private String genreSlug;

	@OneToMany(mappedBy = "genreEntity", cascade = CascadeType.REMOVE)
	private List<GameGenreEntity> gameGenreEntityList = new ArrayList<>();

	public static GenreDto toDto(GenreEntity genreEntity) {
		return GenreDto.builder()
			.seq(genreEntity.getSeq())
			.genreName(genreEntity.getGenreName())
			.genreSlug(genreEntity.getGenreSlug())
			.build();
	}
}
