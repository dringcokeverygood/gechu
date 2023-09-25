package com.gechu.web.user.repository;

import com.gechu.web.user.entity.UsersEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UsersEntity, Long> {
    Optional<UsersEntity> findByUserId(String userId);
}
