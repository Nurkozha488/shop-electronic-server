import { ApiProperty } from "@nestjs/swagger";

export class LoginUserRequest {
    @ApiProperty({ example: 'Nurkozha' })
    username: string;

    @ApiProperty({ example: 'Nurkozha123' })
    password: string;
}

export class LoginUserResponse {
    @ApiProperty({ example: {user: { 
        userId: 1,
        username: 'Nurkozha',
        password: 'Nurkozha123',
    }} })
    user: {
        userId: number;
        username: string;
        password: string;
    };

    @ApiProperty({ example: 'Logged in' })
    msg: string;
}

export class LogoutUserResponse {
    @ApiProperty({ example: 'session has ended' })
    msg: string;
}

export class LoginCheckResponse {
    @ApiProperty({ example: '1' })
    userId: number;
    
    @ApiProperty({ example: 'Nurkozha' })
    username: string;

    @ApiProperty({ example: 'Nurkozha@gmail.com' })
    email: string;
}

export class SignupResponse {
    @ApiProperty({ example: 1 })
    Id: number;
    
    @ApiProperty({ example: 'Nurkozha' })
    username: string;

    @ApiProperty({ 
        example: '$2b$10$e4qEE1LszINiFBoSBoMwH.jhuJNW0sw.P8o9hekF0C1Tu7sv6GXl.', 
    })
    password: string;

    @ApiProperty({ example: 'Nurkozha@gmail.com' })
    email: string;

    @ApiProperty({ example: '2024-03-09T13:38:32.624Z' })
    updatedAt: string;

    @ApiProperty({ example: '2024-03-09T13:38:32.624Z' })
    createdAt: string;
}


