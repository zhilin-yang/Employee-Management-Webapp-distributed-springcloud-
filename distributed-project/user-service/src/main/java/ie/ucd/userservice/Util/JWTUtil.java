package ie.ucd.userservice.Util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;

public class JWTUtil {

    private static final String SECRET_KEY = "secret";

    public static String generateJWT(String username, String password) {

        return Jwts.builder()
                .setSubject(username)
                .setExpiration(new Date(System.currentTimeMillis() + 864000000))
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }

}