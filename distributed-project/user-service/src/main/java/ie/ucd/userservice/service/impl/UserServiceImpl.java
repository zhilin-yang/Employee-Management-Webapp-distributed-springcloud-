package ie.ucd.userservice.service.impl;

import ie.ucd.userservice.entity.User;
import ie.ucd.userservice.mapper.UserMapper;
import lombok.AllArgsConstructor;
import ie.ucd.userservice.dto.UserDto;
import ie.ucd.userservice.repository.UserRepository;
import ie.ucd.userservice.service.APIClient;
import ie.ucd.userservice.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

    private UserRepository userRepository;

   // private RestTemplate restTemplate;
    private WebClient webClient;
    private APIClient apiClient;


    @Override
    public UserDto getUserByUP(UserDto userDto) {

        return UserMapper.mapToUserDto(checkPassword(userDto.getEmail(),userDto.getPassword()));
    }

    @Override
    public UserDto saveUser(UserDto userDto) {
        User user = UserMapper.mapToUser(userDto);
        user.setRole(1);
        User saveUser = userRepository.save(user);

        UserDto savedUserDto = UserMapper.mapToUserDto(saveUser);

        return savedUserDto;
    }

    @Override
    public UserDto getUserByEmail(String email) {
        User user = userRepository.findByEmail(email);
        return UserMapper.mapToUserDto(user);
    }

    @Override
    public UserDto updateP(UserDto userDto) {
        User user = userRepository.findByEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());

        User updatedUser = userRepository.save(user);

        return userDto;
    }

    public User checkPassword(String username, String password) {
        User user = userRepository.findByEmailAndPassword(username, password);
        return user;
    }


}
