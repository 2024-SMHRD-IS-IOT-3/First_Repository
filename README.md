# 공사장 현장 근무자의 안전모 착용 모니터링 시스템<br/>  (팀명 : 안전두뇌)

## 프로젝트 소개
-  라즈베리파이 기반 사고 발생 시 신속한 구조를 위한 정보 제공, 사고예방 및 안전모 착용 강제화 스마트 안전모
- 작업중인 근무자의 안전모 착용 여부를 실시간으로 모니터링하고, 공사장 내 근로자의 위치와 작업 환경을 관리자가 효율적으로 관리할 수 있도록 지원하는 대시보드형 웹페이지

## 프로젝트 기간
2024.04.29 ~ 2024.05.24 (약4주)

## 주요기능
1. 안전모 착용 상태 감지 시스템
   - 안전모 내부 상단과 턱끈에 압력 감지 센서를 부착하여 안전모가 올바른 착용 여부 감지
   - 착용이 미완료된 경우 지속적으로 경고음을 발생시켜 작업자의 착용을 유도
   - 사고 발생 시 위치 추적이 용이하도록 GPS 모듈을 부착
   - 내장 스피커를 통해 사고 상황을 알리는 음성 경고 송출 기능 구현
   
2. 실시간 모니터링 웹페이지
   - 공사장 위치 주소, 지도, 현재 날씨, 현재 시각, 근무자 GPS 정보를 실시간으로 표시
   - 작업자별 안전모 착용 상태를 한눈에 확인할 수 있는 대시보드 제공
     
3. 근무자 관리 시스템
   - 안전모 착용 여부를 확인하여 관리자에게 근무자의 착용 상태를 실시간으로 제공.
   - 안전모 미착용 근무자를 데이터베이스에 기록하여 관리자 페이지에서 조회 가능.

## 📌기술스택
<table>
    <tr>
        <th>구분</th>
        <th>내용</th>
    </tr>
    <tr>
        <td>사용언어</td>
        <td>
          <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white"/>
          <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"/> 
           <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
        </td>
    </tr>
    <tr>
        <td>프레임워크</td>
        <td>
         <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
         <img src="https://img.shields.io/badge/flask-000000?style=for-the-badge&logo=flask&logoColor=white">
         <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"/>
    </tr>
    <tr>
        <td>IoT</td>
        <td>
         <img src="https://img.shields.io/badge/Raspberry_Pi-A22846?style=for-the-badge&logo=RaspberryPi&logoColor=white"> 
         <img src="https://img.shields.io/badge/Arduino-00878F?style=for-the-badge&logo=Arduino&logoColor=white">
        </td>
    </tr>
    <tr>
        <td>데이터베이스</td>
        <td>
            <img src="https://img.shields.io/badge/Oracle 11g-F80000?style=for-the-badge&logo=Oracle&logoColor=white"/>
        </td>
    </tr>
    <tr>
        <td>협업도구</td>
        <td>
            <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/>
            <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
        </td>
    </tr>
</table>
<br/>


## 📌시스템 아키텍처

<br/>

## 📌유스케이스

<br/>

## 📌ER 다이어그램
![화면 캡처 2024-08-15 101411](https://github.com/user-attachments/assets/4387d39c-c992-4706-81b6-81b6e6d0d01b)
<br/>

## 📌회로구성도

<br/>

## 📌화면구성~~
##### 1. 첫 페이지<br/>
![화면 캡처 2024-08-15 101728](https://github.com/user-attachments/assets/e9eeb079-08ed-40a8-94a9-cc1d4886bd96)
##### 2. 로그인 페이지<br/>
![화면 캡처 2024-08-15 101756](https://github.com/user-attachments/assets/fdbefdc4-4ad5-4c64-aa22-40bf532a0afc)
##### 3. 회원가입 페이지<br/>
![화면 캡처 2024-08-15 101814](https://github.com/user-attachments/assets/93eb1805-d969-4669-a229-0045c74b95ea)
##### 4. 회원가입 성공 페이지<br/>
![화면 캡처 2024-08-15 101831](https://github.com/user-attachments/assets/0db0703f-8943-4590-8472-68b57a9b57c7)
<br/>
##### 5. 회원가입 실패 페이지<br/>
![화면 캡처 2024-08-15 101849](https://github.com/user-attachments/assets/6a897b8c-f161-4a6b-8c67-2575845b579b)
<br/>
##### 6. 관리자 페이지<br/>
![화면 캡처 ![화면 캡처 2024-08-15 101907](https://github.com/user-attachments/assets/20a73db4-55c8-4b52-a226-7e6c4ba644e3)
<br/>





## 📌팀원역할~~
<table>
  <tr>
    <td align="center"><strong>김민기</strong></td>
    <td align="center"><strong>김도아</strong></td>
    <td align="center"><strong>유연우</strong></td>
    <td align="center"><strong>홍우진</strong></td>
  </tr>
 <tr>
    <td align="center">Main</td>
    <td align="center">Main</td>
    <td align="center">Main</td>
    <td align="center">Main</td>
  </tr>
 <tr>
    <td align="center">팀장, Server</td>
    <td align="center">PM, Front-End </td>
    <td align="center">하드웨어, AI</td>
    <td align="center">DB</td>
  </tr>
 <tr>
    <td>· 리스크 관리, 회원가입/로그인/정보수정/데이터 송수신/출,퇴근 관리 등 기능구현</td>
    <td>· 프로젝트 일정/개인별진행 사항 파악 및 회의록 작성, 회원가입/로그인/출석/작업환경/마이페이지 등 모든 페이지 제작 및 디자인, 페이지별 기능 연결, 각종 산출문서 관리 </td>
    <td>· 데이터수집,데이터전처리,객체인식 모델링 및 학습, 모델 추론속도 향상 작업, 젯슨보드 환경설정, 젯슨보드에 객체인식과 서보모터 모듈 코드 병합</td>
    <td>· 젯슨 보드 환경설정, 하드웨어 회로구성,센싱데이터 서버 전송</td>
  </tr>
 <tr>
    <td align="center">Sub</td>
    <td align="center">Sub</td>
    <td align="center">Sub</td>
    <td align="center">Sub</td>
  </tr>
 <tr>
    <td align="center">공통업무</td>
    <td align="center">공통업무</td>
    <td align="center">공통업무</td>
    <td align="center">공통업무</td>
  </tr>
 <tr>
    <td>· 프로젝트 개요서 작성, WBS 작성, 테이블 명세서 작성</td>
    <td>· 팀 자기소개서 작성, 프로젝트 회의록 작성, 프로젝트 약식 기획서 작성, 요구사항 정의서 작성, 기획발표용 PPT 제작, 구매 목록 시트 작성, 멘토링 진행일지 작성, 화면 설계서 제작, UI/UX 멘토링용 피그마 구현    </td>
    <td>· 프로젝트 기획서 작성, IoT 회로 구성 설계서 작성, 멘토링 진행일지 작성,구매 목록 시트 작성, 시스템 아키텍처 제작</td>
    <td>· 프로젝트기획서 작성, DB 요구사항 분석서 작성, 멘토링 진행일지 작성, ER 다이어그램 작성,기획발표   </td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/MINKIKING" target='_blank'>github</a></td>
    <td align="center"><a href="https://github.com/mohyunjeong" target='_blank'>github</a></td>
    <td align="center"><a href="https://github.com/yeolchung" target='_blank'>github</a></td>
    <td align="center"><a href="https://github.com/yb1882" target='_blank'>github</a></td>
  </tr>
</table>
<br/>

## 📌참고문헌~~


