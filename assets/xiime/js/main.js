$(function(){$(".popoverFormCadastro").popover({trigger:"hover"});var e=$("#dados-complementares-uerj").clone(),a=$("#dados-complementares-faetec").clone(),d=$("#dados-complementares-fia").clone(),i=$("#dados-complementares-outras").clone(),c=".c06d0191df887d56e19d391c361b9f4f",o=".0377659fb977b05a5d5c73616eba35ad";$("#dados_complementares_instituicoes").children().remove(),$("input[type=radio][name=origem]").change(function(){switch($(this).val()){case"UERJ":$("#dados_complementares_instituicoes").children().remove(),$("#dados_complementares_instituicoes").append(e),$("#uerj_periodo").change(function(){switch($(this).val()){case"TRANCADO":$("#uerj_atividade option.default").prop("selected",!0),$("#uerj_atividade").prop("disabled",!0);break;case"CONCLUIDO":$("#uerj_atividade option:eq(0)").prop("selected",!0),$("#uerj_atividade").prop("disabled",!1),$("#uerj_atividade").find(".profissional").show(),$("#uerj_atividade").find(".academica").hide();break;case"":$("#uerj_atividade option:eq(0)").prop("selected",!0),$("#uerj_atividade").prop("disabled",!0);break;default:$("#uerj_atividade option:eq(0)").prop("selected",!0),$("#uerj_atividade").prop("disabled",!1),$("#uerj_atividade").find(".academica").show(),$("#uerj_atividade").find(".profissional").hide()}}),$("#uerj_centro_setorial").change(function(){switch($(this).val()){case"Educação e Humanidades":$("#uerj_unidade_academica").prop("disabled",!1),$("#uerj_unidade_academica").find(".7c39883929acbf39e84fbb574a8de87b").show(),$("#uerj_unidade_academica option:eq(0)").prop("selected",!0),$("#uerj_unidade_academica").find(".c6205d1a486829b2120b88ee07e04e84").hide(),$("#uerj_unidade_academica").find(c).hide(),$("#uerj_unidade_academica").find(o).hide();break;case"Tecnologia e Ciências":$("#uerj_unidade_academica").prop("disabled",!1),$("#uerj_unidade_academica").find(".c6205d1a486829b2120b88ee07e04e84").show(),$("#uerj_unidade_academica option:eq(0)").prop("selected",!0),$("#uerj_unidade_academica").find(".7c39883929acbf39e84fbb574a8de87b").hide(),$("#uerj_unidade_academica").find(c).hide(),$("#uerj_unidade_academica").find(o).hide();break;case"Biomédico":$("#uerj_unidade_academica").prop("disabled",!1),$("#uerj_unidade_academica").find(c).show(),$("#uerj_unidade_academica option:eq(0)").prop("selected",!0),$("#uerj_unidade_academica").find(".7c39883929acbf39e84fbb574a8de87b").hide(),$("#uerj_unidade_academica").find(".c6205d1a486829b2120b88ee07e04e84").hide(),$("#uerj_unidade_academica").find(o).hide();break;case"Ciências Sociais":$("#uerj_unidade_academica").prop("disabled",!1),$("#uerj_unidade_academica").find(o).show(),$("#uerj_unidade_academica option:eq(0)").prop("selected",!0),$("#uerj_unidade_academica").find(".7c39883929acbf39e84fbb574a8de87b").hide(),$("#uerj_unidade_academica").find(".c6205d1a486829b2120b88ee07e04e84").hide(),$("#uerj_unidade_academica").find(c).hide();break;default:$("#uerj_unidade_academica option:eq(0)").prop("selected",!0),$("#uerj_unidade_academica").prop("disabled",!0)}});break;case"FAETEC":$("#dados_complementares_instituicoes").children().remove(),$("#dados_complementares_instituicoes").append(a);break;case"FIA":$("#dados_complementares_instituicoes").children().remove(),$("#dados_complementares_instituicoes").append(d);break;default:$("#dados_complementares_instituicoes").children().remove(),$("#dados_complementares_instituicoes").append(i)}}),$(".botao-item-empresa:first").trigger("click"),$("#notificacaoGlobal").delay(8e3).fadeOut(500)});