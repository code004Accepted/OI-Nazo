// Note: 在此 js 之前，应先加载 https://icelava.ga/main.js

$(document).ready(function()
{
	AJAX("GET", "http://loli.icelava.ga/OI-Nazo/visit.php?", "application/x-www-form- urlencoded", null, NF);

	$("#user_op").prepend(`<a href="http://icelava.ga/OI-Nazo/level_tree.html" class="text"><i class="fa fa-tree"></i> Level Tree</a>`);
});