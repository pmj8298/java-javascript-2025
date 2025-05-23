// 동적으로 객체 속성 추가
      const obj = {};
      obj.a = 1;
      obj.b = 2;
      obj.e = "실수";
      obj["c"] = function () {
        return this.b;
      };
      obj.d = function () {
        console.log(this.a);
      };

      // 객체의 속성과 메소드 호출
      console.log(obj);
      console.log(obj.c());
      obj.d();

      // 삭제
      delete obj.e;
      console.log(obj); // {a: 1, b: 2, c: ƒ, d: ƒ}

      // this 확인
      function test1() {
        console.log(this.document);
      }
      test1();

      function test2() {
        return this;
      }
      console.log(test2());