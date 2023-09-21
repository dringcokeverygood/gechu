package com.gechu.crawl.igdb.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "genre")
public class GenreEntity {

	@Id
	@GeneratedValue
	private Long seq;

	@NotNull
	private String genreName;
	@NotNull
	private String genreSlug;

	@OneToMany(mappedBy = "genreEntity", cascade = CascadeType.REMOVE)
	private List<GameGenreEntity> gameGenreEntityList = new ArrayList<>();
}
