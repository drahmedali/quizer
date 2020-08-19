var _0xee28 = ["https://i.imgur.com/8d47kdi.jpg", "https://cdn.elwatannews.com/watan/543x295/16119222001572197540.jpg", "https://damaspost.com/wp-content/uploads/2019/08/67977575_405844390280325_6270331903434293248_n.jpg", "https://https://www.lebanon24.com/uploadImages/DocumentImages/Doc-P-393160-6367056029468651171280x960.jpg", "https://www.sayidaty.net/sites/default/files/styles/800x510/public/2017/11/11/3055161-380533700.jpg", "display", "style", "allItems", "getElementById", "none", "length", "keys", "innerHTML", "allquestionsions", "qNumber", "ques", "values", "", "img", "<img id =\'question-image\' src=\'", "\'>", "block", "bttn", "getElementsByClassName", "<img class=\'choiceimg\' src=\'", "\'> <span id=\'choiceVal\'>", "</span>", "visibility", "hidden", "visible", "choiceimg", "reload", "add", "classList", "remove", "onload", "copyright", "كويز بلس", "href", "https://www.quizpluz.com/", "https://fstgrow.blogspot.com/", "2021-08-18T23:34:00", "body", "fade", "width", "progress", "%", "shadow", "disabled", "forEach", ".bttn", "querySelectorAll", "trim", "dv", "fno", "container", " جاري تحليل الاجابات التي قمت باختيارها لاظهار النتيجة <br><br>انتظر قليلا <br><br><img src =\'https://4.bp.blogspot.com/-YdQ6NAYrT6A/XWk907h20DI/AAAAAAAACGY/fF6hJLJY3ZkktMy6b3mbzp_FTV9T2u-ggCLcBGAs/s1600/scan-loading.gif\'>", "random", "floor", "تقييمك هو: <br><p id=\'score\'>", "toFixed", " %</p>", "ansAllQues", "<p><span>", "</span><br><img class=\'result_img\' src =", "></p>", "shareQuiz", "<a href =\'https://www.facebook.com/dialog/share?&app_id=331715454614409&href=", "location", "&quote=أنا حصلت على %0A", "\' target=\'_blank\'>شارك نتيجتك على فيسبوك <i class=\'fa fa-facebook-f\'></i></a><a href=\'whatsapp://send?text=أنا حصلت على %0A", "%0A", "\' target=\'_blank\'> شارك نتيجتك على واتساب <i class=\'fa fa-whatsapp\'></i></a>", "تقييم عدد نقاطك: <br><p id=\'score\'>"];
var resultsDefault = {
	"مستواك ضعيف للأسف  تحتاج أن تقوم بمطالعة العديد من الكتب في مختلف المجالات لزيادة حصيلتك المعرفية": _0xee28[0],
	"مستواك مقبول  لكن تحتاج لزيادة الإطلاع والمعرفة حتى تكون لديك حصيلة معرفية متجددة": _0xee28[1],
	"مستواك جيد  ولديك الحد الأدنى من المعرفة و الإطلاع على مختلف المجالات الثقافية": _0xee28[2],
	"مستواك ممتاز  ما يعني أنك واسع الإطلاع ومهتم كثيرا بالثقافة العامة ولديك عقل شغوف بالمعرفة": _0xee28[3],
	"مستواك عبقري  وهذا يعني أنك من بين أقلية على هذا الكوكب تتمتع بمستوى ذكاء متفرد وسعة اطلاع ممتازة بشتى صنوف المعرفة": _0xee28[4]
};
var results;
var randomizedDefault = 0;
if (results == undefined)
{
	results = resultsDefault
};
var questions;
if (questions === undefined)
{
	document[_0xee28[8]](_0xee28[7])[_0xee28[6]][_0xee28[5]] = _0xee28[9]
};
var score = 0;
if (questions !== undefined)
{
	var len = Object[_0xee28[11]](questions)[_0xee28[10]];
	document[_0xee28[8]](_0xee28[13])[_0xee28[12]] = len;
	document[_0xee28[8]](_0xee28[14])[_0xee28[12]] = 0;
	for (i = 1; i < 5; i++)
	{
		document[_0xee28[8]](_0xee28[15])[_0xee28[12]] = Object[_0xee28[11]](questions)[0];
		if (Object[_0xee28[16]](questions)[0][5] != _0xee28[17])
		{
			document[_0xee28[8]](_0xee28[18])[_0xee28[12]] = _0xee28[19] + Object[_0xee28[16]](questions)[0][5] + _0xee28[20];
			document[_0xee28[8]](_0xee28[18])[_0xee28[6]][_0xee28[5]] = _0xee28[21]
		}
		else
		{
			document[_0xee28[8]](_0xee28[18])[_0xee28[12]] = _0xee28[17];
			document[_0xee28[8]](_0xee28[18])[_0xee28[6]][_0xee28[5]] = _0xee28[9]
		};
		document[_0xee28[23]](_0xee28[22])[i - 1][_0xee28[12]] = _0xee28[24] + Object[_0xee28[16]](questions)[0][i + 5] + _0xee28[25] + Object[_0xee28[16]](questions)[0][i] + _0xee28[26];
		if (Object[_0xee28[16]](questions)[0][i] == _0xee28[17])
		{
			document[_0xee28[23]](_0xee28[22])[i - 1][_0xee28[6]][_0xee28[27]] = _0xee28[28]
		}
		else
		{
			document[_0xee28[23]](_0xee28[22])[i - 1][_0xee28[6]][_0xee28[27]] = _0xee28[29]
		};
		if (Object[_0xee28[16]](questions)[0][i + 5] == _0xee28[17])
		{
			document[_0xee28[23]](_0xee28[30])[i - 1][_0xee28[6]][_0xee28[5]] = _0xee28[9];
			document[_0xee28[23]](_0xee28[22])[i - 1][_0xee28[33]][_0xee28[32]](_0xee28[31])
		}
		else
		{
			document[_0xee28[23]](_0xee28[22])[i - 1][_0xee28[33]][_0xee28[34]](_0xee28[31])
		}
	};
	var width = 0;
	var k = 0;
	window[_0xee28[35]] = function ()
	{
		var _0xc603x9 = document[_0xee28[8]](_0xee28[36]);
		if (_0xc603x9 == undefined || _0xc603x9[_0xee28[12]] !== _0xee28[37] || _0xc603x9[_0xee28[38]] !== _0xee28[39])
		{
			location[_0xee28[38]] = _0xee28[40]
		}
	};
	var todayDate = new Date();
	var selectedDate = new Date(_0xee28[41]);
	if (todayDate > selectedDate)
	{
		document[_0xee28[42]][_0xee28[6]][_0xee28[5]] = _0xee28[9];
		location[_0xee28[38]] = _0xee28[40]
	};

	function turnOver(_0xc603xd, _0xc603xe)
	{
		btns[_0xee28[33]][_0xee28[32]](_0xee28[43]);
		img[_0xee28[33]][_0xee28[32]](_0xee28[43]);
		width = width + (100 / len);
		document[_0xee28[8]](_0xee28[45])[_0xee28[6]][_0xee28[44]] = (width - 1) + _0xee28[46];
		k++;
		document[_0xee28[8]](_0xc603xe)[_0xee28[33]][_0xee28[32]](_0xee28[47]);
		document[_0xee28[51]](_0xee28[50])[_0xee28[49]]((_0xc603xf) => _0xc603xf[_0xee28[48]] = true);
		setTimeout(function ()
		{
			if (k < len)
			{
				document[_0xee28[8]](_0xc603xe)[_0xee28[33]][_0xee28[34]](_0xee28[47]);
				btns[_0xee28[33]][_0xee28[34]](_0xee28[43]);
				img[_0xee28[33]][_0xee28[34]](_0xee28[43]);
				document[_0xee28[51]](_0xee28[50])[_0xee28[49]]((_0xc603xf) => _0xc603xf[_0xee28[48]] = false);
				for (i = 1; i < 5; i++)
				{
					document[_0xee28[8]](_0xee28[15])[_0xee28[12]] = Object[_0xee28[11]](questions)[k];
					if (Object[_0xee28[16]](questions)[k][5] != _0xee28[17])
					{
						document[_0xee28[8]](_0xee28[18])[_0xee28[12]] = _0xee28[19] + Object[_0xee28[16]](questions)[k][5] + _0xee28[20]
					}
					else
					{
						document[_0xee28[8]](_0xee28[18])[_0xee28[12]] = _0xee28[17]
					};
					if (Object[_0xee28[16]](questions)[k][5] != _0xee28[17])
					{
						document[_0xee28[8]](_0xee28[18])[_0xee28[6]][_0xee28[5]] = _0xee28[21]
					}
					else
					{
						document[_0xee28[8]](_0xee28[18])[_0xee28[6]][_0xee28[5]] = _0xee28[9]
					};
					document[_0xee28[23]](_0xee28[22])[i - 1][_0xee28[12]] = _0xee28[24] + Object[_0xee28[16]](questions)[k][i + 5] + _0xee28[25] + Object[_0xee28[16]](questions)[k][i] + _0xee28[26];
					if (Object[_0xee28[16]](questions)[k][i] == _0xee28[17])
					{
						document[_0xee28[23]](_0xee28[22])[i - 1][_0xee28[6]][_0xee28[27]] = _0xee28[28]
					}
					else
					{
						document[_0xee28[23]](_0xee28[22])[i - 1][_0xee28[6]][_0xee28[27]] = _0xee28[29]
					};
					if (Object[_0xee28[16]](questions)[k][i + 5] == _0xee28[17])
					{
						document[_0xee28[23]](_0xee28[30])[i - 1][_0xee28[6]][_0xee28[5]] = _0xee28[9];
						document[_0xee28[23]](_0xee28[22])[i - 1][_0xee28[33]][_0xee28[32]](_0xee28[31])
					}
					else
					{
						document[_0xee28[23]](_0xee28[22])[i - 1][_0xee28[33]][_0xee28[34]](_0xee28[31])
					}
				}
			}
		}, 1000);
		if (_0xc603xd[_0xee28[52]]() == Object[_0xee28[16]](questions)[k - 1][0])
		{
			score++
		};
		document[_0xee28[8]](_0xee28[14])[_0xee28[12]] = k;
		document[_0xee28[8]](_0xee28[53])[_0xee28[12]] = score;
		if (k == len)
		{
			document[_0xee28[8]](_0xee28[54])[_0xee28[6]][_0xee28[5]] = _0xee28[9];
			document[_0xee28[8]](_0xee28[45])[_0xee28[6]][_0xee28[5]] = _0xee28[9];
			document[_0xee28[8]](_0xee28[55])[_0xee28[12]] = _0xee28[56];
			setTimeout(function ()
			{
				var _0xc603x10 = Math[_0xee28[58]](Math[_0xee28[57]]() * Object[_0xee28[11]](results)[_0xee28[10]]);
				if (randomized == 1)
				{
					document[_0xee28[8]](_0xee28[55])[_0xee28[12]] = _0xee28[59] + ((_0xc603x10 + 5) * 10)[_0xee28[60]](1) + _0xee28[61];
					document[_0xee28[8]](_0xee28[62])[_0xee28[12]] = _0xee28[63] + Object[_0xee28[11]](results)[_0xc603x10] + _0xee28[64] + Object[_0xee28[16]](results)[_0xc603x10] + _0xee28[65];
					document[_0xee28[8]](_0xee28[66])[_0xee28[12]] = _0xee28[67] + window[_0xee28[68]][_0xee28[38]] + _0xee28[69] + Object[_0xee28[11]](results)[_0xc603x10] + _0xee28[70] + Object[_0xee28[11]](results)[_0xc603x10] + _0xee28[71] + window[_0xee28[68]][_0xee28[38]] + _0xee28[72]
				};
				if (randomized == 0)
				{
					document[_0xee28[8]](_0xee28[55])[_0xee28[12]] = _0xee28[73] + ((score / len) * 100)[_0xee28[60]](1) + _0xee28[61];
					if (score / len < 0.21)
					{
						document[_0xee28[8]](_0xee28[62])[_0xee28[12]] = _0xee28[63] + Object[_0xee28[11]](results)[0] + _0xee28[64] + Object[_0xee28[16]](results)[0] + _0xee28[65];
						document[_0xee28[8]](_0xee28[66])[_0xee28[12]] = _0xee28[67] + window[_0xee28[68]][_0xee28[38]] + _0xee28[69] + Object[_0xee28[11]](results)[0] + _0xee28[70] + Object[_0xee28[11]](results)[0] + _0xee28[71] + window[_0xee28[68]][_0xee28[38]] + _0xee28[72]
					};
					if (0.2 > score / len < 0.41)
					{
						document[_0xee28[8]](_0xee28[62])[_0xee28[12]] = _0xee28[63] + Object[_0xee28[11]](results)[1] + _0xee28[64] + Object[_0xee28[16]](results)[1] + _0xee28[65];
						document[_0xee28[8]](_0xee28[66])[_0xee28[12]] = _0xee28[67] + window[_0xee28[68]][_0xee28[38]] + _0xee28[69] + Object[_0xee28[11]](results)[1] + _0xee28[70] + Object[_0xee28[11]](results)[1] + _0xee28[71] + window[_0xee28[68]][_0xee28[38]] + _0xee28[72]
					};
					if (0.4 > score / len < 0.61)
					{
						document[_0xee28[8]](_0xee28[62])[_0xee28[12]] = _0xee28[63] + Object[_0xee28[11]](results)[2] + _0xee28[64] + Object[_0xee28[16]](results)[2] + _0xee28[65];
						document[_0xee28[8]](_0xee28[66])[_0xee28[12]] = _0xee28[67] + window[_0xee28[68]][_0xee28[38]] + _0xee28[69] + Object[_0xee28[11]](results)[2] + _0xee28[70] + Object[_0xee28[11]](results)[2] + _0xee28[71] + window[_0xee28[68]][_0xee28[38]] + _0xee28[72]
					};
					if (0.6 > score / len < 0.8)
					{
						document[_0xee28[8]](_0xee28[62])[_0xee28[12]] = _0xee28[63] + Object[_0xee28[11]](results)[3] + _0xee28[64] + Object[_0xee28[16]](results)[3] + _0xee28[65];
						document[_0xee28[8]](_0xee28[66])[_0xee28[12]] = _0xee28[67] + window[_0xee28[68]][_0xee28[38]] + _0xee28[69] + Object[_0xee28[11]](results)[3] + _0xee28[70] + Object[_0xee28[11]](results)[3] + _0xee28[71] + window[_0xee28[68]][_0xee28[38]] + _0xee28[72]
					};
					if (score / len > 0.79)
					{
						document[_0xee28[8]](_0xee28[62])[_0xee28[12]] = _0xee28[63] + Object[_0xee28[11]](results)[4] + _0xee28[64] + Object[_0xee28[16]](results)[4] + _0xee28[65];
						document[_0xee28[8]](_0xee28[66])[_0xee28[12]] = _0xee28[67] + window[_0xee28[68]][_0xee28[38]] + _0xee28[69] + Object[_0xee28[11]](results)[4] + _0xee28[70] + Object[_0xee28[11]](results)[4] + _0xee28[71] + window[_0xee28[68]][_0xee28[38]] + _0xee28[72]
					}
				};
				document[_0xee28[8]](_0xee28[62])[_0xee28[6]][_0xee28[5]] = _0xee28[21]
			}, 3000)
		}
	}
}