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
@Table(name = "platform")
public class PlatformEntity {

	@Id
	@GeneratedValue
	private Long seq;

	@NotNull
	private String platformName;

	@NotNull
	private String platformSlug;

	@OneToMany(mappedBy = "platformEntity", cascade = CascadeType.REMOVE)
	private List<GamePlatformEntity> gamePlatformEntityList = new ArrayList<>();
}
