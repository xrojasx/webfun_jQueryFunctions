            $(document).ready(function(){
                $('#click').click(function(){
                    alert('The .click function worked');
                })
                $('#hide').click(function(){
                    $('#hidet').hide();
                })
                $('#show').click(function(){
                    $('#hidet').show();
                })
                $('#toggle').click(function(){
                    $('#togglet').toggle();
                })
                $('#slideup').click(function(){
                    $('#slideupt').slideUp();
                    
                })
                $('#slidedown').click(function(){
                    $('#slideupt').slideDown();
                })
                $('#slideToggle').click(function(){
                    $('#slidetogglet').slideToggle();
                })
                $('#fadeout').click(function(){
                    $('#fadeoutt').fadeOut();
                })
                $('#fadein').click(function(){
                    $('#fadeoutt').fadeIn();
                })
                $('#addclass').click(function(){
                    $('#addclasst').addClass('blue');
                })
                $('#removeclass').click(function(){
                    $('#addclasst').removeClass('blue');
                })
                $('#before').click(function(){
                    $('#beforet').before('<h2>It Worked !<h2>');
                })
                $('#after').click(function(){
                    $('#aftert').after('<h2>It Worked !<h2>');
                })
                $('#append').click(function(){
                    $('#appendt').append(' it works');
                })
                $('#html').click(function(){
                    $('#htmlt').html(' <h2>it works<h2>');
                })
                $('#val').click(function(){
                    $('input:text').val('It Works');
                })
                $('#text').click(function(){
                    alert($('#text'))
                })
            });
          