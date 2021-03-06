<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>APSB Helpdesk - Home</title>
    <script src="js/javascript.js"></script>
	<link rel="stylesheet" href="css/style.css" type="text/css">
</head>
<body style="margin: 0; min-height: 100%;">
	<div id="background">
	<div id="page">
		<div id="header">
			<div id="logo"></div>
		<div id="navigation">
			<ul>
			<a href="index.php" title="Home">Home</a>
			<a href="faculty.php" title="Faculty">Faculty</a>
			<a href="student.php" title="Student">Student</a>
			<a href="parent.php" title="Parent">Parent</a>
			<a href="staff.php" title="Staff">Staff</a>
			</ul>
		</div>
	</div>
	<div id="contents">
    	<div id="side-nav" class="fixed">
       	  <ul>
            <li><a href="http://bb9.apsb.org" onclick="leaveAlert()" class="hoverbubble" target="_blank" title="BlackBoard">BlackBoard<span class="hoverbubbletext"><?php include 'description.php'; echo "$blackboard"; ?></span></a>
            <a href="googleguides.php" class="hoverbubble" title="Google Guides">Google Guides<span class="hoverbubbletext"><?php include 'description.php'; echo "$googleguides"; ?></span></a>
                <a href="https://apsb.cloud.talentedk12.com/hire/Index.aspx" onclick="leaveAlert()" class="hoverbubble" target="_blank" title="Careers 2016-2017">Careers 2016-2017<span class="hoverbubbletext"><?php include 'description.php'; echo "$tedk12hire"; ?></span></a>
                <a href="http://jobs.apsb.org" onclick="leaveAlert()" class="hoverbubble" target="_blank" title="Careers 2017-2018">Careers 2017-2018<span class="hoverbubbletext"><?php include 'description.php'; echo "$applicantportal"; ?></span></a>
              <a href="https://www.drcedirect.com/all/eca-portal-ui/welcome/LA" onclick="leaveAlert()" class="hoverbubble" target="_blank" title="DRC Insight">DRC Insight<span class="hoverbubbletext"><?php include 'description.php'; echo "$drcinsight"; ?></span></a>
              <a href="http://mail.apsb.org" onclick="leaveAlert()" class="hoverbubble" target="_blank" title="Email">Email<span class="hoverbubbletext"><?php include 'description.php'; echo "$gmail"; ?></span></a>
                <a href="https://kelly.aesoponline.com/login.asp" onclick="leaveAlert()" class="hoverbubble" target="_blank" title="Kelly Educational Staffing">Kelly Educational Staffing<span class="hoverbubbletext"><?php include 'description.php'; echo "$kellyeducationalstaffing"; ?></span></a>
                <a href="http://osp.osmsinc.com/AscensionLA/" onclick="leaveAlert()" class="hoverbubble" target="_blank" title="Online School Payments">Online School Payments<span class="hoverbubbletext"><?php include 'description.php'; echo "$onlineschoolpayments"; ?></span></a>
              <a href="http://pwd.apsb.org" onclick="leaveAlert()" class="hoverbubble" target="_blank" title="Password Reset">Password Reset<span class="hoverbubbletext"><?php include 'description.php'; echo "$passwordreset"; ?></span></a>
                <a href="http://apsb.la.safeschools.com" onclick="leaveAlert()" class="hoverbubble" target="_blank" title="Safe Schools">Safe Schools<span class="hoverbubbletext"><?php include 'description.php'; echo "$safeschools"; ?></span></a>
			</li>
            </ul>
		</div>
        <div id="main" class="flex-item">
            <h1>Welcome to the APSB Technology Helpdesk Website!</h1>
			<p><?php include 'introblocks.php'; echo "$portal"; ?></p>
			<p><?php include 'introblocks.php'; echo "$links"; ?></p>
			<p><?php include 'introblocks.php'; echo "$guidebar"; ?></p>
            <p><?php include 'introblocks.php'; echo "$needmore"; ?></p>
		</div>
	</div>
</div>
</div>
<?php include 'guidebar.php'; ?>
<div id="footer">
			<p>
				Contact us at Helpdesk@apsb.org
			</p>
		</div>
</body>
</html>