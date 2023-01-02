package ie.ucd.userservice.controller;

import ie.ucd.userservice.Util.JWTUtil;
import ie.ucd.userservice.dto.AuthResponseDto;
import lombok.AllArgsConstructor;
import ie.ucd.userservice.dto.UserDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import ie.ucd.userservice.service.UserService;

@RestController
@RequestMapping("api/users")
@AllArgsConstructor
public class UserController {
    // Build Save Organization REST API
    private UserService userService;
    @PostMapping("/login")
    public ResponseEntity<AuthResponseDto> login(@RequestBody UserDto userDto){
        // Authenticate the user and generate a JWT token
        UserDto isUserDto
                = userService.getUserByUP(userDto);
        String token="";
        AuthResponseDto authResponseDto = new AuthResponseDto();
        if(isUserDto!=null){
            token = JWTUtil.generateJWT(userDto.getEmail(), userDto.getPassword());
            authResponseDto.setUserDto(isUserDto);
            authResponseDto.setToken(token);

        }

        return new ResponseEntity<>(authResponseDto, HttpStatus.OK);
    }
    @PostMapping("/signin")
    public ResponseEntity signin(@RequestBody UserDto userDto){
        // Authenticate the user and generate a JWT token
        UserDto isUser = userService.saveUser(userDto);
        String token = JWTUtil.generateJWT(userDto.getEmail(), userDto.getPassword());

        return ResponseEntity.ok(token);
    }
    @GetMapping("/changeP/{email}")
    public ResponseEntity<UserDto> changePassword(@PathVariable("email") String email){
        UserDto userDto= userService.getUserByEmail(email);
        return ResponseEntity.ok(userDto);
    }
    @PostMapping("/confirmP")
    public ResponseEntity confirmP(@RequestBody UserDto userDto){
        // Authenticate the user and generate a JWT token
        UserDto userDtoNew = userService.updateP(userDto);

        return new ResponseEntity<>(userDtoNew, HttpStatus.OK);
    }



}
