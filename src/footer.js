import React from 'react'
import { Grid, Box, Paper, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Grid container direction='column'>
      <footer style={{ backgroundColor: '#2A2E3A' }}>
        <Paper variant='outlined' sx={{ backgroundColor: '#2A2E3A', marginLeft: "200.5px", marginRight: "82px", marginBottom: '58px', border: 'none'}}>
          <Box p={4} paddingBottom={6}  >
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.100586H72V71.7268H0V0.100586ZM68.6861 68.4366V3.39727H3.30733V68.4366H68.6861ZM17.9081 27.6295H14.8961V36.7232H12.2187V27.6295H9.20671V25.0705H17.9081V27.6295ZM26.5505 32.5583C26.5524 31.5978 26.8702 30.6643 27.4554 29.9004C28.0405 29.1364 28.8608 28.5839 29.7912 28.3272C30.7215 28.0705 31.7108 28.1236 32.6079 28.4786C33.505 28.8335 34.2608 29.4708 34.7597 30.293L32.568 31.5595C32.4119 31.2711 32.1767 31.0327 31.8897 30.8721C31.6028 30.7114 31.2759 30.6351 30.9471 30.652C30.4909 30.7316 30.0774 30.9686 29.7795 31.3214C29.4815 31.6742 29.3182 32.1203 29.3182 32.5811C29.3182 33.0419 29.4815 33.488 29.7795 33.8408C30.0774 34.1936 30.4909 34.4306 30.9471 34.5102C31.2785 34.5285 31.6082 34.4506 31.8959 34.2861C32.1837 34.1215 32.4172 33.8773 32.568 33.5832L34.7597 34.83C34.2647 35.6557 33.5111 36.2971 32.6145 36.6557C31.7178 37.0144 30.7277 37.0706 29.7959 36.8157C28.8641 36.5608 28.042 36.0089 27.4558 35.2446C26.8696 34.4802 26.5515 33.5457 26.5505 32.5844V32.5583ZM33.4079 12.3212C31.6624 12.3212 30.1269 13.2351 30.1269 15.0499C30.1269 17.9288 34.2413 17.2368 34.2413 18.3597C34.2413 18.6926 33.9395 18.9211 33.3358 18.9211C33.0165 18.8977 32.7069 18.802 32.4305 18.6413C32.1541 18.4807 31.9183 18.2593 31.7412 17.9941L29.7725 19.1234C30.1101 19.7655 30.631 20.294 31.2696 20.6425C31.9083 20.9909 32.6363 21.1438 33.362 21.0819C35.1732 21.0819 36.84 20.2659 36.84 18.3531C36.84 15.2784 32.7255 16.0879 32.7255 14.965C32.7255 14.5211 33.8607 14.0446 34.7663 15.1152L36.6956 14.0838C36.3499 13.5337 35.863 13.0852 35.2851 12.7846C34.7073 12.484 34.0593 12.342 33.4079 12.3734V12.3212ZM46.0663 15.7615V20.886H43.5596V16.1597C43.58 15.9617 43.5568 15.7617 43.4917 15.5735C43.4265 15.3853 43.3209 15.2135 43.1823 15.07C43.0437 14.9265 42.8753 14.8148 42.6889 14.7425C42.5025 14.6703 42.3025 14.6393 42.1028 14.6517C41.1841 14.6517 40.5541 15.1805 40.5541 16.3621V20.9317H38.0408V9.25949H40.5738V13.3657C40.8632 13.0275 41.2282 12.7616 41.6397 12.5893C42.0511 12.4169 42.4974 12.343 42.9428 12.3734C44.6292 12.3734 46.0663 13.5485 46.0663 15.7941V15.7615ZM43.7893 31.6051V36.7232H41.2825V31.9577C41.3028 31.7594 41.2796 31.5591 41.2145 31.3706C41.1494 31.1822 41.0439 31.01 40.9054 30.866C40.7669 30.722 40.5987 30.6096 40.4123 30.5366C40.2258 30.4636 40.0257 30.4317 39.8257 30.4431C38.907 30.4431 38.2705 30.9785 38.2705 32.16V36.7297H35.7638V25.0705H38.2705V29.1767C38.5599 28.8318 38.9271 28.5599 39.3422 28.3829C39.7573 28.2059 40.2085 28.129 40.6591 28.1583C42.3522 28.1583 43.7893 29.3464 43.7893 31.6051ZM28.6963 12.517V20.9187H26.2093V20.1353C25.8955 20.4784 25.509 20.7478 25.0778 20.9239C24.6465 21.1 24.1812 21.1785 23.7156 21.1537C21.5239 21.1537 19.7193 19.2344 19.7193 16.7537C19.7193 14.2731 21.5436 12.3734 23.7156 12.3734C24.1812 12.3485 24.6465 12.427 25.0778 12.6032C25.509 12.7793 25.8955 13.0487 26.2093 13.3918V12.5366L28.6963 12.517ZM26.183 16.7537C26.1688 16.3698 26.0415 15.9984 25.8167 15.686C25.592 15.3735 25.2798 15.1337 24.9191 14.9964C24.5583 14.8591 24.165 14.8304 23.788 14.9139C23.4109 14.9974 23.067 15.1894 22.7988 15.4659C22.5307 15.7424 22.3502 16.0913 22.2799 16.4691C22.2096 16.8469 22.2526 17.237 22.4035 17.5907C22.5544 17.9443 22.8065 18.2461 23.1285 18.4583C23.4505 18.6704 23.8281 18.7837 24.2144 18.784C24.4837 18.7966 24.7526 18.7524 25.0034 18.6542C25.2543 18.556 25.4814 18.4061 25.6699 18.2143C25.8583 18.0225 26.0038 17.7932 26.0968 17.5415C26.1898 17.2897 26.2281 17.0213 26.2093 16.7537H26.183ZM18.4134 9.25949V20.9187H16.4448L11.9169 14.5734V20.9187H9.20671V9.25949H11.2147L15.7361 15.5722V9.25949H18.4134ZM25.5793 32.5583C25.5805 32.8473 25.5541 33.1358 25.5005 33.42H19.4962C19.6166 33.8626 19.885 34.2513 20.2571 34.5218C20.6293 34.7924 21.0831 34.9287 21.5436 34.9084C21.821 34.9087 22.0953 34.8508 22.3487 34.7383C22.602 34.6258 22.8285 34.4612 23.0135 34.2555L25.0215 35.398C24.6023 35.9068 24.0698 36.3115 23.4661 36.58C22.8625 36.8485 22.2042 36.9736 21.5436 36.9451C18.6825 36.9451 16.9107 35.0324 16.9107 32.5583C16.8922 31.9736 16.9949 31.3913 17.2124 30.8478C17.4299 30.3043 17.7575 29.8112 18.1749 29.3991C18.5922 28.9869 19.0904 28.6647 19.6383 28.4524C20.1862 28.24 20.7722 28.1422 21.3598 28.1648C21.9309 28.1642 22.4961 28.2789 23.0213 28.502C23.5465 28.7251 24.0208 29.0519 24.4153 29.4627C24.8098 29.8735 25.1163 30.3596 25.3164 30.8917C25.5165 31.4238 25.6059 31.9908 25.5793 32.5583ZM19.5224 31.5986H23.0594C22.9239 31.241 22.6821 30.9329 22.3662 30.7154C22.0502 30.498 21.6751 30.3815 21.2909 30.3815C20.9067 30.3815 20.5316 30.498 20.2157 30.7154C19.8997 30.9329 19.6579 31.241 19.5224 31.5986ZM45.6201 36.7232H48.5403V33.8182H45.6201V36.7232Z" fill="white" />
            </svg>
            <Grid container direction='row' sx={{ marginTop: '40.27px' }}>
              <Grid item xs container direction='column'>
                <Box paddingBottom={1}>
                  <Typography
                    variant='h5'
                    sx={{
                      textAlign: 'left',
                      letterSpacing: '0px',
                      color: 'white',
                      opacity: 1,
                      fontFamily: 'Mulish',
                      fontStyle: "normal",
                      fontWeight: "700"
                    }}
                  >
                    NashTech
                  </Typography>
                </Box>
                <Box>
                  <a
                    href='https://www.nashtechglobal.com/contact-us/'
                    target='_blank'
                    style={{
                      textDecoration: 'none', color: '#99A4B5'
                    }}
                    rel='noreferrer'
                  >
                    <Typography variant='subtitle1' sx={{
                      marginTop: '1rem', fontFamily: 'Mulish',
                      fontStyle: "normal",
                      fontWeight: "700",
                      color: '#99A4B5',
                      ":hover": { color: "#ffff" },
                    }}>
                      Contact
                    </Typography>
                  </a>
                  <a
                    href='https://www.nashtechglobal.com/careers/'
                    target='_blank'
                    style={{ textDecoration: 'none', color: '#99A4B5' }}
                    rel='noreferrer'
                  >
                    <Typography variant='subtitle1' sx={{
                      marginTop: '1rem', fontFamily: 'Mulish',
                      fontStyle: "normal",
                      fontWeight: "700",
                      ":hover": { color: "#ffff" },
                    }}>
                      Carier
                    </Typography>
                  </a>
                  <a href='https://www.nashtechglobal.com/contact-us/' target='_blank' style={{ textDecoration: "none", color: '#99A4B5' }}>
                    <Typography variant='subtitle1' sx={{
                      marginTop: '1rem', fontFamily: 'Mulish',
                      fontStyle: "normal",
                      fontWeight: "700",
                      ":hover": { color: "#ffff" },
                    }}>
                      Our Location
                    </Typography>
                  </a>
                </Box>
              </Grid>
              <Grid item xs container direction='column'>
                <Box paddingBottom={1}>
                  <Typography
                    variant='h5'
                    sx={{
                      textAlign: 'left',
                      letterSpacing: '0px',
                      color: 'white',
                      opacity: 1,
                      fontFamily: 'Mulish',
                      fontStyle: "normal",
                      fontWeight: "700"
                    }}
                  >
                    Solutions
                  </Typography>
                </Box>
                <Box>
                  <a
                    href='https://www.nashtechglobal.com/our-solutions/'
                    target='_blank'
                    style={{ textDecoration: 'none', color: '#99A4B5' }}
                    rel='noreferrer'
                  >
                    <Typography variant='subtitle1' sx={{
                      marginTop: '1rem', fontFamily: 'Mulish',
                      fontStyle: "normal",
                      fontWeight: "700",
                      ":hover": { color: "#ffff" },
                    }}>
                      Our Solutions
                    </Typography>
                  </a>
                  <a
                    href='https://www.nashtechglobal.com/industries/'
                    target='_blank'
                    style={{ textDecoration: 'none', color: '#99A4B5' }}
                    rel='noreferrer'
                  >
                    <Typography variant='subtitle1' sx={{
                      marginTop: '1rem', fontFamily: 'Mulish',
                      fontStyle: "normal",
                      fontWeight: "700",
                      ":hover": { color: "#ffff" },
                    }}>
                      Industries
                    </Typography>
                  </a>
                  <a href='https://www.nashtechglobal.com/our-thinking/' target='_blank' style={{ textDecoration: "none", color: '#99A4B5' }}>
                    <Typography variant='subtitle1' sx={{
                      marginTop: '1rem', fontFamily: 'Mulish',
                      fontStyle: "normal",
                      fontWeight: "700",
                      ":hover": { color: "#ffff" },
                    }}>
                      Our Thinking
                    </Typography>
                  </a>
                </Box>
              </Grid>
              <Grid item xs container direction='column'>
                <Box paddingBottom={1}>
                  <Typography
                    variant='h5'
                    sx={{
                      textAlign: 'left',
                      letterSpacing: '0px',
                      color: 'white',
                      opacity: 1,
                      fontFamily: 'Mulish',
                      fontStyle: "normal",
                      fontWeight: "700"
                    }}
                  >
                    Useful Links
                  </Typography>
                </Box>
                <Box>
                  <a
                    href='https://www.nashtechglobal.com/privacy-policy/'
                    target='_blank'
                    style={{ textDecoration: 'none', color: '#99A4B5' }}
                    rel='noreferrer'
                  >
                    <Typography variant='subtitle1' sx={{
                      marginTop: '1rem', fontFamily: 'Mulish',
                      fontStyle: "normal",
                      fontWeight: "700",
                      ":hover": { color: "#ffff" },
                    }}>
                      Privacy notice
                    </Typography>
                  </a>
                  <a
                    href='https://www.nashsquared.com/about-us/modern-slavery'
                    target='_blank'
                    style={{ textDecoration: 'none', color: '#99A4B5' }}
                    rel='noreferrer'
                  >
                    <Typography variant='subtitle1' sx={{
                      marginTop: '1rem', fontFamily: 'Mulish',
                      fontStyle: "normal",
                      fontWeight: "700",
                      ":hover": { color: "#ffff" },
                    }}>
                      Modern slavery
                    </Typography>
                  </a>
                  <a href='https://accelerator.nashtechglobal.com/' target='_blank' style={{ textDecoration: "none", color: '#99A4B5' }}>
                    <Typography variant='subtitle1' sx={{
                      marginTop: '1rem', fontFamily: 'Mulish',
                      fontStyle: "normal",
                      fontWeight: "700",
                      ":hover": { color: "#ffff" },
                    }}>
                      NashTech Accelerators
                    </Typography>
                  </a>
                </Box>
              </Grid>
              <Grid item xs container direction='column'>
                <Box paddingBottom={1}>
                  <Typography
                    variant='h5'
                    sx={{
                      textAlign: 'left',
                      letterSpacing: '0px',
                      color: 'white',
                      opacity: 1,
                      fontFamily: 'Mulish',
                      fontStyle: "normal",
                      fontWeight: "700"
                    }}
                  >
                    Connect Us
                  </Typography>
                </Box>
                <Box>
                  <a
                    href='https://www.linkedin.com/company/nashtech-global/'
                    target='_blank'
                    style={{ color: '#99A4B5', textDecoration: 'none' }}
                    rel='noreferrer'
                  >
                    <Typography variant='subtitle1' sx={{
                      marginTop: '1rem', fontFamily: 'Mulish',
                      fontStyle: "normal",
                      fontWeight: "700",
                      ":hover": { color: "#ffff" },
                    }}>
                      <svg width="16" height="16" style={{ marginRight: '13px' }} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.57143 16H0.25V5.30812H3.57143V16ZM1.89286 3.87777C0.857143 3.87777 0 2.9838 0 1.91103C0 0.444922 1.57143 -0.484807 2.85714 0.266128C3.46429 0.587957 3.82143 1.23162 3.82143 1.91103C3.82143 2.9838 2.96429 3.87777 1.89286 3.87777ZM15.9643 16H12.6786V10.815C12.6786 9.56342 12.6429 7.99003 10.9286 7.99003C9.21429 7.99003 8.96429 9.3131 8.96429 10.7077V16H5.64286V5.30812H8.82143V6.77423H8.85714C9.32143 5.95178 10.3929 5.05781 12 5.05781C15.3571 5.05781 16 7.27485 16 10.1356V16H15.9643Z" fill="#99A4B5" />
                      </svg>  LinkedIn
                    </Typography>
                  </a>
                  <a
                    href='https://twitter.com/nashtechhn'
                    target='_blank'
                    style={{ color: '#99A4B5', textDecoration: 'none' }}
                    rel='noreferrer'
                  >
                    <Typography sx={{
                      marginTop: '1rem', fontFamily: 'Mulish',
                      fontStyle: "normal",
                      fontWeight: "700",
                      ":hover": { color: "#ffff" },
                    }}>
                      <svg width="18" height="16" style={{ marginRight: '13px' }} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0096 4.37378C16.0096 4.54727 16.0096 4.68607 16.0096 4.85956C16.0096 9.6827 12.3931 15.1998 5.74577 15.1998C3.67923 15.1998 1.78491 14.6099 0.200562 13.569C0.4761 13.6037 0.751638 13.6384 1.06162 13.6384C2.74929 13.6384 4.29919 13.0485 5.53911 12.0769C3.95477 12.0422 2.61152 11.0012 2.16377 9.5439C2.40487 9.5786 2.61152 9.6133 2.85262 9.6133C3.1626 9.6133 3.50702 9.5439 3.78256 9.4745C2.12933 9.12751 0.889407 7.67017 0.889407 5.90053V5.86583C1.3716 6.14342 1.95712 6.28221 2.54264 6.31691C1.54381 5.65764 0.923849 4.54727 0.923849 3.29812C0.923849 2.60414 1.09606 1.97956 1.40604 1.45908C3.19704 3.64511 5.88354 5.10246 8.88001 5.27595C8.81113 4.99836 8.77669 4.72077 8.77669 4.44318C8.77669 2.43065 10.3955 0.799805 12.3931 0.799805C13.4264 0.799805 14.3563 1.21619 15.0452 1.94486C15.8374 1.77137 16.6295 1.45908 17.3184 1.0427C17.0428 1.91017 16.4918 2.60414 15.734 3.05523C16.4573 2.98583 17.1806 2.77764 17.8006 2.50005C17.3184 3.22872 16.6984 3.8533 16.0096 4.37378Z" fill="#99A4B5" />
                      </svg> Twitter
                    </Typography>
                  </a>
                  <a
                    href='https://www.facebook.com/nashtechglobal/'
                    target='_blank'
                    style={{ color: '#99A4B5', textDecoration: 'none' }}
                    rel='noreferrer'
                  >
                    <Typography sx={{
                      marginTop: '1rem', fontFamily: 'Mulish',
                      fontStyle: "normal",
                      fontWeight: "700",
                      ":hover": { color: "#ffff" },
                    }}>
                      <svg width="10" height="16" style={{ marginRight: '13px' }} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.17217 9L9.6609 6.125H6.55399V4.25C6.55399 3.4375 6.97289 2.6875 8.36926 2.6875H9.80053V0.21875C9.80053 0.21875 8.50889 0 7.28708 0C4.73871 0 3.06308 1.40625 3.06308 3.90625V6.125H0.200531V9H3.06308V16H6.55399V9H9.17217Z" fill="#99A4B5" />
                      </svg> Facebook
                    </Typography>
                  </a>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{
            width: "85%",
            height: "30px",
            fontFamily: 'Mulish',
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "30px",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            color: "#FFFFFF",
            justifyContent: "center",
            marginBottom: '2rem'
          }}>
            Our achievements
          </Box>
          <div className='separator' style={{ color: "white", width: "82%", left: '2rem', position: 'relative', borderTop: "solid 1px" }}></div>
          <Box p={4} paddingBottom="24px" sx={{ width: '91%' }}>
            <Grid container direction='row'>
              <Grid item xs container direction='column' >
                <Box paddingBottom={2} paddingTop={2}>
                  <Box sx={{ display: 'flex', width: "90%", justifyContent: 'space-between' }}>
                    <img
                      style={{ height: "78px" }}
                      src='https://accelerator.nashtechglobal.com/icons/great-place-logo.png'
                    />
                    <img
                      style={{ paddingLeft: '75.19px', height: "78px" }}
                      src='https://accelerator.nashtechglobal.com/icons/clutch-logo.png'
                    />
                    <img
                      style={{ paddingLeft: '75.19px', height: "78px" }}
                      src='https://accelerator.nashtechglobal.com/icons/intercert-logo.png'
                    />
                    <img
                      style={{ paddingLeft: '75.19px', height: "78px" }}
                      src='https://accelerator.nashtechglobal.com/icons/istqb-logo.png'
                    />
                    <img
                      style={{ paddingLeft: '75.19px', height: "78px" }}
                      src='https://accelerator.nashtechglobal.com/icons/cmmi-logo.png'
                    />
                    <img
                      style={{
                        paddingLeft: '75.19px', height: "78px",
                      }}
                      src='https://accelerator.nashtechglobal.com/icons/iso27001-logo.png'
                    />
                    <img
                      style={{
                        paddingLeft: '75.19px', height: "78px",
                      }}
                      src='https://accelerator.nashtechglobal.com/icons/iso27002-logo.png'
                    />

                    <img
                      style={{
                        paddingLeft: '75.19px', height: "78px",
                      }}
                      src="https://accelerator.nashtechglobal.com/icons/iso9001-logo.png"
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ marginLeft: '1.5rem' }}>
            <Typography variant='subtitle1' sx={{
              color: "white", fontFamily: 'Mulish',
              fontStyle: "normal",
              fontWeight: "700"
            }}>&copy; 2023 NashTech</Typography>
            <Typography variant='subtitle1' sx={{
              color: "#99A4B5", marginTop: '1rem', fontFamily: 'Mulish',
              fontStyle: "normal",
              fontWeight: "700"
            }}>Part of Nash Squared.</Typography>

          </Box>
        </Paper>
      </footer>
    </Grid >
  )
}
