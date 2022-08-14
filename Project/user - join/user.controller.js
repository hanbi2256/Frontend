let userid_check = async (req,res)=>{
    let userid = req.query.userid; //ajax 이 요청하면서 보낸 userid값 잘 받았다. 
    let flag = false;           //  초기 설정값은 false; 
    
    let result = await User.findOne({      // ajax get값으로 넘긴 값을 DB에서 찾기 
        where:{userid}
    })
    if(result == undefined){   //못찾으면 = 아이디 생성 가능하다! true 
        flag = true;
    }else{           // 이미 아이디가 존재한다 ! (else 부분 생략 가능 )
        flag = false;
    }

    res.json({
        login:flag,   // login이라는 변수에 flag 값 (true or false) 를 넣고 
        userid         // userid라는 변수에 userid 값을 넣어서 data변수에 넣겠다. (json)
    })
}