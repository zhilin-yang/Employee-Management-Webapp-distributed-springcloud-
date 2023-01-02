package ie.ucd.userservice.mapper;

import ie.ucd.userservice.dto.UserDto;
import ie.ucd.userservice.entity.User;

public class UserMapper {

    public static UserDto mapToUserDto(User user){
        UserDto userDto = new UserDto(
                user.getId(),
                user.getEmail(),
                user.getPassword(),
                user.getRole()
        );
        return userDto;
    }

    public static User mapToUser(UserDto userDto){
        User user = new User(
                userDto.getId(),
                userDto.getEmail(),
                userDto.getPassword(),
                userDto.getRole()
        );
        return user;
    }

}
