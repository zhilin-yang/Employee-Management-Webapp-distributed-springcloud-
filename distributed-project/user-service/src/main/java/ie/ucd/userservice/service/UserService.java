package ie.ucd.userservice.service;


import ie.ucd.userservice.dto.UserDto;

public interface UserService {
    UserDto getUserByUP(UserDto userDto);
    UserDto saveUser(UserDto userDto);
    UserDto getUserByEmail(String email);
    UserDto updateP(UserDto userDto);


}
