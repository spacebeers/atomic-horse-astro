import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, a as renderComponent, e as createAstro } from '../chunks/astro/server_7FlixKJL.mjs';
import 'kleur/colors';
import { $ as $$Banner, a as $$Layout } from '../chunks/Layout_CQhcHKs_.mjs';
/* empty css                                 */
import { b as $$MortgageStudio, $ as $$Card, a as $$Clients } from '../chunks/Clients_C1uvGYaV.mjs';
import { $ as $$Strip } from '../chunks/Strip_Cvifc-NF.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const v = "4.8.0";
const ip = 1440;
const op = 1680;
const fr = 24;
const w = 1000;
const h = 760;
const nm = "h";
const assets = [
	{
		h: 1182,
		w: 980,
		id: "image_0",
		p: "data:image/webp;base64,UklGRjYfAABXRUJQVlA4WAoAAAAQAAAA0wMAnQQAQUxQSMATAAAB8Fbbdh7btm01CA2CIAiCIBiCIBiCIRiCIBiCIAiCIDQGda21v/ceI6LV6p1SRMQE2M//P////P/z/8//P////P/z/8//P///4l7af7K8vUo7rzEn/hvnHNfZyuuqnWPif+EcZ3tJlX4v/K9e91HeTX7cG/8n1328lcr54P/008vrqJwLf8B1lheR94k/5tP9HdRG4I8ao75+vG/8gVd/9ZQ78IeOy986ZeCPPsobp0388Ud527SJv+Iob5ry4K85ylumDPxVb3/D+BX4y8b1fukbf+F9vFvqxF96lveKX/iLX2+VtvFX3+2N4g/++re/To7AB7jbu8QHPsTbXyRt42Pc9TVy4aO83iFl4cOc5QVyBD7OaK+PGx/p9e7wiQ/18RdHDXysq742Oj7ZaC+NGx9uf2P4g4/3fl/4wgc83hY18BE//qpogQ95+Yui43Ne/pro+KSXvyRufNbLXxEDn/byF8TA5z3eDwOf+Hg7DHzm17th4FPvb4aBz72+FwY++ChvhYGPfvk74caHP14JHR9/fyF0fP5RXwcN3+B6G9T4CnC9CzzwJbY3gS98i9tfBA++x+s9cOGbrG+Bjq9yvgRqfBforwBf+DLD3wA3vs7rBdDwfUbRv/WFYMjfia+0iJ/HdzLE78GXWqTvwLc6lM/jawkXvgff66V7B77YLXse3wy66j34aqfonfhyi+TV+HYuxfOFb3cr3sD3W/Wu4wu+5a7GN7TVzhe+4ip2D77jS+sufMlL6g58zS50Nb6nrnO+8D0PnZv4orfMDXzVLnInvutD4zq+7EvianxbU+Fq4NsOgfON77vImy984U3eFr7xS90GvvJb3Aa+86ltA1/6lraOr13ZOr73omsdX3yTtY4XWsdXf4laxwut44XW8e0PRev4+qegdbzQOl5oHS+0jhdaxwut44XW8UK78EIbeKENvNAG3mc+8T7zhVx8JMwXkvFSsLrxPquB99kRyMcuXx0Z2dTrxAttICdNun3gfeYLSbmVqyxk5RSuGkjLoVtHIC8v2erIzEO1bqRm0ywfyE2TbF/IzS1ZdSM5p2K1QHZegtWRn4de3UjQolY+kKEm1r6QoVOsaiBFL63qgRw9pOpClhalGsjSbTrtC2k6dKpu5OkpUz2QqFWlLmRqmEb7QKoOjfKFXO0SVQPJWhSqI1u3CfSNdL31ySfy9ZCnupCwps5HIGEfdTqRsl2bfCBnXZrKQs4uU+YaSNpTmTrStgjTQNouk2VfyNtTlmogcYsqdWTuMlG+kbpdk3wid12S6kbuPqbIPZC8hyLdyN4wPfaJ9L31qG7kb5GjHsjfZWp8I4O7GPlEBodpcd1I4VuLeiCHixTdSOJpQuwPsvgQorqQxdt0+Aik8alDF/I4XIX8QSLfJsJ1IZOLCB2BTB6mwRdyuUqQP8jlaQpcF5K5KVALJPM0AT6Rzk1/fCCdl8lvWcjnLj81kM/b1Lcjo7v6DGT0NO31hZRu2lM3Unqa9PZATjfpuZDU04TXH2R1FZ6ykNXDdLcF0rroTkdeXya7A3kdrjo+kdiniW5dSOxtotsCmd1EpyO1H9PcgdwukuMTuX2Z4taF3N6uOC2Q3IcJbkd2Pya4N7I7it74g/Q+TW59Ib2XyW0N5HeVmyOQ35epbUeCL1PbGxlexcYHMvwyrfWFDF+mtXUhw5drTQ1k+HKT2h7I8OUmtR0pvtyk9kaKLzepHUjxqKa0/iDFo5rS+kKKRzWlLQs53k1payDHuyltDeT4ZUrbAjk+TGk7kvwxpe1I8uVK05Hk4Sa0N5I8qgntQJYfJrQDWd5NaAeyfJjQDmT5NKEdyPLtOuMTWR7VZNYX0vwwmfWFNL9MZn0hzR+TWV9I8+U6s5DmUU1mB/L8MJkdyPPbZHYgz5fJ7ECeh8vMQKI3U9kLiX6ZynYk+jSV7Uj0cJVpyPRmIlsj0y4T2RpI9GUi6wuJHkVkfCHTu4nsQKY/JrI3Mn27yHSkejONrUj1yzS2RKot01hfSPUqMgOpfprGnkj1aRrbkOpRNMYj107T2IlUn6axF1I9isY05PppEuuRa9M09kGqR9GYE7l+mcSWyLVlGjuR61VjTuT6ZRJbIte2a8xErjeT2I5cf0xiPXItXGMGcv00ia3I9WUaO5OtakxHrt+msTvXwjXmRq53k9iOXJ8msQ3JXiWmRrINU1hfyPVwiZlI9tMUdiDZtynsiWxvCtOR7dMEtka6FYEpgWy/TV99IdvDBWYi3U/T14F036avJ/L90JeOfJ8mrzUSrslLDeT7Y+rqCwlf1MUXEn6Yug4kfLi6DGT8ZeLakfHh4tKR8pdpa0XKb9eWGjnXTVp9I+W3Sasv5HzXloWc3yatA0nfpWUg6bcpa0fWH8rSkfXThPVA2jdhqZF203S1BtK+6YoH0n6arPpC3jdZ8YW83yarE4nfZWUg8bep6kDmd1W5kfnbRLUj9buodKT+Nk3tyP2uKQdyP1xSaiTfZYpaA7kfrig1kPyXCWoNZH8RFN/I/mF66gvpX/TEF9L/MTn1hfxvcuIL+T9NTX2BgIecTBBwm5oOMLCryQADw8R0gIKXmAxw0LVkgIPDpHSAhEVKBkg4TUkHWHgoyQALtwnpAA27kAzQMFxHBnh4m4wOELHIyAARH1PRASY2FRlg4jYRHaBiF5EBKoZryAAXhymoT5CxKIgvkHGagPoCGw8B8QU2btNPX6DjpR++wMciHzXAx2HqWQOEbOpRA4TcJp41wMhTPDo46drRwclh0tlByiYdF0i5TDkHWNmVY4CV4brhE7QcJpu+wMsmG2WBl9tUswaIeapGDTDTRaODmsM0s4ObTTNucHObZA6Q81IMX2BnEQxfYOdjelkD9Ox60QL0DJPLDoLecnGDoVUsfIChy7TSFyjataJucNSlogU4OkwpO1h6KMUAS7fppD+g6a0TZYGnRSZagKfLVLKDqV0lBqjqGuETVH1MIusGVw+JOAJcDVPIC2y9BcIf0LXqQ12g6zZ5PAJ8PeXhAmOLOPgEY6dpY92gbNeGHuCsS8MAaYcJY1lg7SEMR4C1Ybp4g7dDFnyCuFUVWoC420TxAnUvTfAJ7hZJaAHuLlPEG+w9BaEs0LfowRGg72Nq6AME7mpQFxjsYnCCwo9JoU9w+JCCI8DhMCH0ARYPIWgbND504AKPw1SwLhD5VoELVK4aUCaovE0CzwCXbwUoE2yuAnAG2LyN/mWCzxf9zgChC/nKBKOXcf8Cp0/q1QVSF+L5DVYv433doPXJux7gdaHdDWJPI70/YHYnXV2gtnOuBaj9GOU7yN0pN8BuJ5xPsPsxvpcFene+1QC/nW49wO/H2N7B8M62AYo713yA4o9R3Rc43qlWFjgexvQaIPlgWg2w/CBaB83DeN7B88GzE0Q/aDZA9DCWDzB9kMwHqH5wzBeoHkZxX+D6oJgvkP1gWFkgexjBa4Dtg2A1QPeDXzVA9zB61wDfB71qgPAHu2qA8GHkrgHGD3K1AOUPbnVwPozaHaQf1Opg/cGsDtZvI3YD7W9i1eBd5VUN0H4brWuA9zetaoD4lVU1QPxtpK4B5t+kqgHqV06VAPW3UdoXuH9TyhfIXxnlC+TfRmhfYP/NqAH6V0IN0H8bnwf4f/PphABWOnUI4DY2dyjgzaYaElDIVAMKuIzLHpDAk0u+oIGFSwsauIzKAyJ4UumGChYmdajgMiIfkMGTSDV0oPDIAzK4jMa+oIOdRw+E0Gk0IISPsbhDCTuLGqTQSVRDCh7jsC9IYSfRhBSGc2hAC4dRuEMMDwpViGEYg0uowWCQL6jhwaABNdxG4BNyeBOoQQ8rfzz0YBt/F/Tw4s+AIBb6dAjiMvbWUISTPb6giIU9DxTxMfKekMROngpNdO741oRh3H2giQd3TmhiGHUrRHFQx7cqVOoMiOI25nao4sWcErJQmLOgisuIe0EWO3EadNF541sXHuPtA108eHNAF8NoW0IYbt5MCGOlzQlh3MbaEspw0mZBGQtrLijjY6StkMbOmiUNYaS9II2DNAXaWEkztWEbZ09o48mZEuLgnJnQxscoe0AcD8p4iMM2yg6I402ZBnUslFnqMI2xF9SxM6aEOoQz5oE6DiNsgzxWxmx5WEbYC/LYCVNCHsIJ80Aeh/G1QR8rYZY+LONrhz52vnjoQzhfLujjMLoWCGTlyxCIZXRtEMjOlykQYXRtEMibL1shCl06BPIxum6FOOhyQSC3sdVDIU66XBDIcLZ4KMQwtl5QyMoWD4WYxtYLCtnZ4qEQ29h6QSFPtngoRDhbLijkaWT1UIhtbD2hkAddtkJMY2uHQja6bIWYxtYDClnoMhViGFsbFLLQZSjEbWwtEMhwulwKcRlbPQQinC4dAnkZXZdAhNOlQSAvo+sQiHC6OATyMrqeAhHOly0Ql9G1QR/D+TIE4jK6OgSy8OUUiGF8XQJR+FKhj8P4egtEJUzowzS+HtDHRpihD9v46qEPnTAd8hhG2EcfLsI49LEQpuvDMMI++lAJ45DHZYTt+tAZM+QhjLEhDzdjDshjYcwtD48xdsvDwZgKddzG2FMeLspMeSiUgTo+xthDHjplbnUIo+xSh5syDnWslDnUYRllb3U4ObPUoVDGIY6PUfZQh86ZWx2cM1MchnEW4nhwpolDGGdPcRikGeJwkGZpQxhpoY2DNE0cDtKc2hBG2lsbBmumNhysgTSGkbZow2BN04bOmksbnDW3NDzG2ikNJ222NBTaQBmXsbZKw02bJg2NNqcyhNH2UoaHN0MZOm+mMhTeLGFYxlsI4/1KO3hTlMF504Rh2hvtIs4hDI04lzDYG22+0q5XWmPOowvG3CkL85V2vdLaK83eaOuVdr/SjldaeaNte6M9r7TzldZeafZGW6+08Urr7Lk1obLn0gR7o81X2qDPKQknfZoktFea0bcqwuKPKcLzSrsItAWhEWgKQiHQIwhG4EsPJoNOPbgZ1PTgZFDVg8Yg0wOn0JYDo/BUg8mhSw0Gh7oaXBxqatA4ZGpQSbTFwEj8aMFm0aUFk0VNCy4WuRacLLItBY1GQwoqjU4pMBpXJdg8shCCSaRHCAaRTiG4iFSF4CCShQ40Jj064EzqOmBMLjKwqWRbBSaXbhUYXGoqcHDJQgO2kXlowMmmQwLC2WShAJfReShA4dMhAMMIHfwrjBr0G8bog36VUrbJN43TN/kaqQr3prF6Ua/RqjNvGq09iNd4ZYN304hdedeYZZN106jdWde4ZZtz08h9ca6xy4Nxw+g9GFf4VQg3jOCDb4VhlW6XUXySLZxjjWyXkXxSbTvLGtW60XwSbRvPG9Ea0eyh2TSmF5oVqtkg2TCul6BYONnsothlbPcg2Da+d4IdhLNFr2mMb/QqlLOHXLdxvgS1wklnF7W60X4RaxrvG7Eq8eym1W3M9yBVOPXsIFU38j+UmsZ+D0YV+tlBqMsE8KHTdgXwYFMzCTzI9JgIDiqFq4BvJnWTwUqkaUJ40SiKEthk0WlS6MGhZWJ4cKiqgd0MukwPJ3+WCaIHfaoiWGPPZZp4cmeZKg7qVFnwRZzTdLEEbaYpY2VNFGmwTprTxPGmzGPy+BAmXB988eUwgfRgy20SWYMryzXCKleqqWRnymk62XnymFIOloRLhQ2SNBPLQZHL5HIRZJpe+qJHuGCYL3Y0k0xf3LhMNH0xY5ps+uJFuG6YL1pUU05fpDhNO31RYph6+iLEcvkwX3SIagLqiw2HSagvLlwmor6Y8JiODh4sFxIbLIhiUjpI0ExMOwW6yWknwDBBPSL7pklqjdxbrilWd+ZFMVX1lXdRTVd9pl03aR1Jd5q4Xik3TF57wj0msC2ybbnCWN25ttw01lemRTWV9ZFnUU1o7zSrJrU9ybqJbYsM6ya3deVXN8H1mV23ae6dW8NUt2fWMN2tkVbDlNdXUg3TXh8pNUx+z4QaJsAtsmmYBJeVS8NUeGTSMB3ueTRMietOomFa7E8KDZPjK4GGCXKL7BkmyT5zp5sqX5nTTZdbpE03ZfaZM9FMnK+MiWryXHe6rGoC7U+yLDeN7pEpj5tKl5knw5T6ypJuWl13hsRhau13fuxqgt12ciw3yfYnNYbJ9hF5cZpw+5MU0Uy7j8iIVUy9/cmH4SbgbSfDaRrudybsajLeVho8bkp+RQ6cJuZlJsCupudHfHuPm6L7/dXFaape5/e2qgl7jy/tMm33+xvbzeS9zK/rdlP4tr+q3Uzlz/iebjed9+tL2s20voxv6DK9b/PbmdUkv61vJk6T/b6/luGm/H1/JauZ+vf9dUS3N2Df38Xl9hLs+3t4ir0I+/4OZrOXYV+f3z7shdjmZ7e7vRTb+Nx2txdjueMj291ejn7uj2t3e0Mez0e1u70lyx2f0jzsVdnnJzSavS7LHZ9N3MXemcfzuazu9t70c30iMaq9Pcu9P4zV3V6h9d4fw76rvUjrvT+AGIe9Tuu9/m7PYS/Vcj5/qRiH25vVj7H/Nvs+7A1bzif+GvOs9qKt5xN/vHUf9sKtfaw/1rwPt/eut+vZf5j9nM3ewN7OMf8Ia1zN7V1c2nnP9X8k5riOai/m0vp1zxn/O/Z8rqs1e1PX1o7r387//HP929ZasZ//f/7/+f/n/5//f/7/+f/n/5//f/7/+f/n/5//f/7/+f/n/5//f/7/+f/n/5//f/7/+f/n/5//f/7/+f/n/5//f/7/+f/n/5//f/7/+f/n/5//f/7/+f/n/5///59XVlA4IFALAACQMgGdASrUA54EPm02m0mkIyKhIX1YCIANiWlu4XdODP4B+AH14P5U+4ddHS86VXwD+AfwD8//4B9/vf4Bbs2bNmzZs2bNmzZs2bNmzZs2bNmzZs2bNmzZs2bNmzZs2bNmzZs2bNmzZs2bNmzZs2bNmzZs2bNmzZs2bNmzZs2bNmzZs2bNmzZs0Rr/6ZvbmZg8ePHjx48ePHjx48ePHjx48ePHjx48eOUe4E9THTPqSpKwfqO5lrqAhIkSJEiRIkSJEiRIkSJEiRIkSJEiRAFbIduHupEiMu2oYemmQplx48ePHjx48ePHjx48ePHjx48ePHKPcCxzJkyZDRSMV4TpmKBAgQIECBAgQIECBAgQIECBAgPgYKYTFixYsWDOFlBEZkyZMmTJkyZMmTJkyZMmTJkyZMll0QsWLFiwZTexlS/o9mzZs2bNmzZs2bNmzZs2bNmxi3D8SDHMmTJkyZDvMD169evXr169evXr169evXr169SR7AaQ0xYsWLFixTfMD169evXr169evXr169evXr167TL1YkTohYsWLFixTfMD169evXr169evXr169evXr12itkPG1Pgt2bNmzZs2bH/MD169evXr169evXr169evXr1Ie4FjmTJkyZMmTIYwWh68SJEiRIkSJEiRIkSJEiRIkQDL1YkVAQsWLFixYsWDijNWrVq1atWrVq1atWrVq1asw4oBVxCakXr169evXrtUxYsWLFixYsWLFixYsWLFimHuBPUx0tuzZs2bNmzZs0TLyaRXcePHjx48ePHjx48ePHjxyj3AscyZMmTJkyZMl6TohYsWLFixYsWLFixYsWLFMPcCtomTJkyZMmTJkso9gNIi6q4cOHDhw4cOHDhw4cOHCsjENVmUqPZs2bNmzZs2Z56moysNRIkSJEiRIkSJEiRIkSJEAVsiKoECBAgQIECBASUjCIb6PZs2bNmzZs2bNmzZs2bM81Is5NmzZs2bNmzZsYTfOCXr169evXr169evXr169epI9gNIaYsWLFixYsWLFgye6CgPZs2bNmzZs2bNmzZs2bM89SXoLg9evXr169evXaK2pvQqLFixYsWLFixYsWLFixYMTfOCXr169evXr169dpYRJdy2bNmzZs2bNmzZs2bNmx49wLHMmTJkyZMmTJkvCMVw2D3Dhw4cOHDhw4cOHDhw3QwUv54l96tNmzZs2bNmzYxPdBjWzZs2bNmzZs2bNmzZs2MJvnBL169evXr169evUh7gdmB69evXr169evXr169eu0y9WJFQELFixYsWLFixYsHFGatWrVq1atWrVq1atWrMOKAVcQmpF69evXr169evXapixYsWLFixYsWLFixYph7gT1MdLbs2bNmzZs2bNmzZoitqauWrVq1atWrVq1atWrVWQb8qjmTJkyZMmTJkyZMmQzC+iAmvXr169evXr169evVTigFXEJevXr169evXr169eph8Pr169evXr169evXr1JHsBpDTFixYsWLFixYsWLFimR6v30cePHjx48ePHjx48eGMvViROiFixYsWLFixYsWLFimPhkzqTJkyZMmTJkyZMmSyj2A0hpixYsWLFixYsWLFixYpvh9evXr169evXr169SR7AaQ0xYsWLFixYsWLFixYsUyPV++jjx48ePHjx48ePHhjL1YkTohYsWLFixYsWLFixYsUx8MmdSZMmTJkyZMmTJksj3AvRVps2bNmzZs2bNmzZs2NOH169evXr169evXrtUxYsWLFixYsWLFixYsWKZHq/fRx48ePHjx48ePHjlR7AaQ0xYsWLFixYsWLFixYsWKY+GTOpMmTJkyZMmTJkx4TfORa1atWrVq1atWrVq1atVY0+75gevXr169evXr167Zm1Hs2bNmzZs2bNmzZs2bGJ7oKA9mzZs2bNmzZs2Z4V/6+i9evXr169evXr169evUh7gbhjx48ePHjx48ePHKj1eIVQIECBAgQIECBAgQIEB8GF9Cdq1atWrVq1atWrU314kSJEiRIkSJEiRIkSJEC4w+vXr169evXr169dqmLFixYsWLFixYsWLFixTI9X76OPHjx48ePHjx48eGrD69evXr169evXr169evUj4ZM6kyZMmTJkyZMmTJj04fXr169evXr169evXr16l8Pr169evXr169evXqXw+vXr169evXr169evXr2YWH169evXr169evXr1I19uS/E6dOnTp06dOnTp06dOQj1fvo48ePHjx48ePHjx45dkNvDhw4cOHDhw4cOHDhuqoGTJkyZMmTJkyZMmSyDK1Kb5J06dOnTp06dOnTp06VBCOgtoWLFixYsWLFixYsWDIumLV8tWrVq1atWrVq1atWkEYrhm1Hs2bNmzZs2bNmzZnm/kCg7x48ePHjx48ePHjx4ZTFixYsWLFixYsWLFixTGvtyX4nTp06dOnTp06dOnIR6v30cePHjx48ePHjx48ePHLNSROJ02bNmzZs2bNmzZs2MJvnEEXr169evXr169evXr16lTMwaNN6KFChQoUKFChQoTRHQ430JMmTJkyZMmTJkyZMmTIcFKROJ02bNmzZs2bNmzZnnqajKw1EiRIkSJEiRIkSJEiRIkR9pmYNGm9FChQoUKFChQmikawHIM7kLFixYsWLFixYsWLFixYsGxZg0Wng26CxYsWLFiwZbh+K1iOXYiRIkSJEiRIkSJEiRIkSJEZPoXAjVszdIRIkSJEiQupGsA8Z3mbBYsWLFixYsWLFixYsWLFixTUzLLJEZkgh1wsWLFiwYwkHITldx48ePHjx48ePHjx48ePHjx48eOWmZZZIjM3qITsKE0K5rNy4aiRIkSJEiRIkSJEiRIkSJEiRIkSJEikZyf1ZJdsJ6+cfM3dR6B/WfVDUSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkSJEiRIkQAAP7WTgAAAAPmgCTzvBXsZfOpPBQDlNlmABQA0ovV9AGwAC2EOr6ANqjyAkjEtxHbAgLRmwhQGNo0goD0/IIUBN0EsIdgSP7ur6ABlFpN1HfAGxMcZQkvNgyFGn+4xiNJdzwy0iwJ3eOr6ABYD3GMSP7ur6ABZPlp+mBNqHA4AGyctPbQKR7ur6ABoHTgT2wheLn7euTclqYcnAnSOaXgDjTs0tJPu6voA4cSLYFGgUId9X0ACkgaR/WaQALeq+7CdpOr6ABaLY7bkPNIgDYNOByNGkyFF+PuMYo/O8Aqh8UkH1fQAKwlfdj8/ILICnpBCUD0Ctb19fkEKkundlSzYQrugmrNhCskufqMsKjendjpDwAK2VzSe3MZiW3xUkWDGQPQKYpdo4ZCTybM7qW4VADfQXGgel7zD5ZeFQALBjBR7duYy8DuPoECYNAbUCAAAUvgCigQF3gLIA1fkCAwPcYxLOCjV8CAVNV6Z7kKAtsCjYTDAcfLT20CPWGHy08tCgG3y09PXdAIL0On5TKu6APvAousMYgFT49RdYYxASRoAAAAAAAAAAAAAAAAAAAAAAAA",
		u: "",
		e: 1
	},
	{
		h: 1536,
		w: 1517,
		id: "image_1",
		p: "data:image/webp;base64,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",
		u: "",
		e: 1
	}
];
const layers = [
	{
		ind: 1,
		ty: 3,
		nm: "N",
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 0
			},
			r: {
				a: 0,
				k: 0
			},
			p: {
				a: 0,
				k: [
					632,
					404,
					0
				]
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				]
			},
			s: {
				a: 0,
				k: [
					34,
					34,
					100
				]
			}
		},
		ip: 0,
		op: 4320,
		st: 0
	},
	{
		ind: 2,
		ty: 2,
		nm: "L",
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 100
			},
			r: {
				a: 1,
				k: [
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 1440,
						s: [
							123.251
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 1452,
						s: [
							120.751
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 1488,
						s: [
							120.751
						]
					},
					{
						i: {
							x: [
								0.833
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.167
							],
							y: [
								0
							]
						},
						t: 1500,
						s: [
							123.251
						]
					},
					{
						i: {
							x: [
								0.741
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.775
							],
							y: [
								0
							]
						},
						t: 1536,
						s: [
							123.251
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.167
							],
							y: [
								0
							]
						},
						t: 1560,
						s: [
							2.72
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.61
							],
							y: [
								0
							]
						},
						t: 1620,
						s: [
							2.72
						]
					},
					{
						t: 1644,
						s: [
							123.251
						]
					}
				]
			},
			p: {
				a: 0,
				k: [
					-298.319,
					-168.343,
					0
				]
			},
			a: {
				a: 0,
				k: [
					385.634,
					754.954,
					0
				]
			},
			s: {
				a: 0,
				k: [
					100,
					100,
					100
				]
			}
		},
		ip: 1440,
		op: 1800,
		st: 0,
		parent: 1,
		refId: "image_0"
	},
	{
		ind: 3,
		ty: 4,
		nm: "h",
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 100
			},
			r: {
				a: 1,
				k: [
					{
						i: {
							x: [
								0.807
							],
							y: [
								1.123
							]
						},
						o: {
							x: [
								0.509
							],
							y: [
								0
							]
						},
						t: 1536,
						s: [
							0
						]
					},
					{
						i: {
							x: [
								0.381
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.476
							],
							y: [
								0.171
							]
						},
						t: 1548,
						s: [
							19.675
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.167
							],
							y: [
								0
							]
						},
						t: 1560,
						s: [
							-15.14
						]
					},
					{
						i: {
							x: [
								0.739
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.418
							],
							y: [
								0
							]
						},
						t: 1620,
						s: [
							-15.14
						]
					},
					{
						i: {
							x: [
								0.833
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.452
							],
							y: [
								0
							]
						},
						t: 1632,
						s: [
							16.67
						]
					},
					{
						t: 1644,
						s: [
							0
						]
					}
				]
			},
			p: {
				a: 0,
				k: [
					793.441,
					175.804,
					0
				]
			},
			a: {
				a: 0,
				k: [
					161.851,
					340.285,
					0
				]
			},
			s: {
				a: 0,
				k: [
					100,
					100,
					100
				]
			}
		},
		shapes: [
			{
				ty: "gr",
				nm: "G",
				bm: 0,
				it: [
					{
						ty: "sh",
						nm: "P",
						ind: 0,
						ks: {
							k: [
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1440,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1446,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1452,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1458,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1464,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1470,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1476,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1482,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1488,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1494,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1500,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1506,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1512,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1518,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1524,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1530,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1536,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1542,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1548,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1554,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1560,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1566,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1572,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1578,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1584,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													-10.231,
													-58.859
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-42.81,
													-22.715
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-268.508,
													-78.567
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1590,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1596,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													-22.066,
													-65.562
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-49.432,
													-25.197
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.043,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-272.764,
													-91.792
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1602,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1608,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1614,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1620,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1626,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1632,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1638,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1644,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1650,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1656,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1662,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1668,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1674,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1680,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1686,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1692,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1698,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1704,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1710,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1716,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1722,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1728,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1734,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1740,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1746,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1752,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1758,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1764,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									i: {
										x: 0.833,
										y: 0.833
									},
									o: {
										x: 0.167,
										y: 0.167
									},
									t: 1770,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													273.648,
													-87.539
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								},
								{
									t: 1776,
									s: [
										{
											i: [
												[
													0,
													0
												],
												[
													-9.391,
													7.531
												],
												[
													-33.121,
													117.78
												],
												[
													-27.483,
													51.851
												],
												[
													52.559,
													8.537
												],
												[
													67.605,
													-34.831
												],
												[
													34.003,
													36.056
												],
												[
													31.845,
													-6.598
												],
												[
													1.02,
													-81.2
												],
												[
													-4.915,
													-29.446
												],
												[
													9.908,
													-17.232
												],
												[
													-103.474,
													-71.636
												]
											],
											o: [
												[
													8.301,
													-8.472
												],
												[
													90.359,
													-45.378
												],
												[
													16.61,
													-62.158
												],
												[
													8.024,
													-38.676
												],
												[
													-82.139,
													-23.998
												],
												[
													-39.041,
													6.055
												],
												[
													-26.157,
													9.847
												],
												[
													-21.249,
													-43.205
												],
												[
													19.685,
													21.854
												],
												[
													4.722,
													16.101
												],
												[
													0,
													0
												],
												[
													66.256,
													45.869
												]
											],
											v: [
												[
													-28.75,
													178.44
												],
												[
													-2.242,
													154.406
												],
												[
													159.358,
													0.244
												],
												[
													270.174,
													-127.276
												],
												[
													229.042,
													-228.037
												],
												[
													19.479,
													-157.446
												],
												[
													-100.969,
													-136.126
												],
												[
													-177.316,
													-92.587
												],
												[
													-250.256,
													-119.602
												],
												[
													-201.869,
													-32.277
												],
												[
													-211.042,
													17.843
												],
												[
													-178.128,
													206.166
												]
											],
											c: true
										}
									]
								}
							],
							a: 1
						}
					},
					{
						ty: "fl",
						nm: "F",
						bm: 0,
						c: {
							a: 0,
							k: [
								0.137254901961,
								0.121568634931,
								0.125490196078,
								1
							]
						},
						o: {
							a: 0,
							k: 100
						},
						r: 1
					},
					{
						ty: "tr",
						o: {
							a: 0,
							k: 100
						},
						r: {
							a: 0,
							k: 0
						},
						p: {
							a: 0,
							k: [
								281.852,
								252.285
							]
						},
						a: {
							a: 0,
							k: [
								0,
								0
							]
						},
						s: {
							a: 0,
							k: [
								100,
								100
							]
						},
						nm: "T",
						sk: {
							a: 0,
							k: 0
						},
						sa: {
							a: 0,
							k: 0
						}
					}
				]
			}
		],
		ip: 1440,
		op: 1800,
		st: 0,
		parent: 2
	},
	{
		ind: 4,
		ty: 2,
		nm: "L",
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 100
			},
			r: {
				a: 0,
				k: 0
			},
			p: {
				a: 0,
				k: [
					-735.507,
					219.28,
					0
				]
			},
			a: {
				a: 0,
				k: [
					758.378,
					767.656,
					0
				]
			},
			s: {
				a: 0,
				k: [
					100,
					100,
					100
				]
			}
		},
		ip: 1440,
		op: 1800,
		st: 0,
		parent: 1,
		refId: "image_1"
	}
];
const markers = [
];
const horse_looking = {
	v: v,
	ip: ip,
	op: op,
	fr: fr,
	w: w,
	h: h,
	nm: nm,
	assets: assets,
	layers: layers,
	markers: markers
};

const $$Astro = createAstro();
const $$GradientContentStrip = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GradientContentStrip;
  const { theme } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["gradient-strip", { dark: theme === "DARK", light: theme === "LIGHT" }, "full-bleed", "strip"], "class:list")} data-astro-cid-n6zfcwim> <div class="wrapper" data-astro-cid-n6zfcwim> <div class="content" data-astro-cid-n6zfcwim> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "dotlottie-player", "dotlottie-player", { "class": "horse", "src": JSON.stringify(horse_looking), "background": "transparent", "speed": "1", "direction": "1", "playMode": "normal", "loop": true, "autoplay": true, "data-astro-cid-n6zfcwim": true })} </div> </section> `;
}, "/usr/local/var/www/magenta-magnitude/src/components/GradientContentStrip.astro", void 0);

const $$FeaturedProject = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="featured-client wrapper" data-astro-cid-grvnqqyp> <p class="tag" data-astro-cid-grvnqqyp>Work</p> <h2 class="heading" data-astro-cid-grvnqqyp>Featured project</h2> <div class="grid" data-astro-cid-grvnqqyp> <div class="content" data-astro-cid-grvnqqyp> <p data-astro-cid-grvnqqyp>Quis ocurreret pro id. Nec ea reque delicata gloriatur, qui delenit denique te. Tantas molestie iracundia sed eu, vix harum albucius democritum ad. Ea nisl velit his, est etiam oratio dissentiunt eu.</p> <a href="" class="button" data-astro-cid-grvnqqyp>
Learn more
</a> </div> <div class="image" data-astro-cid-grvnqqyp> ${renderComponent($$result, "MortgageStudio", $$MortgageStudio, { "data-astro-cid-grvnqqyp": true })} </div> </div> </section> `;
}, "/usr/local/var/www/magenta-magnitude/src/components/FeaturedProject.astro", void 0);

const $$HorseImage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="664" height="613" viewBox="0 0 664 613" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_842_3215" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="664" height="613"> <rect x="0.805908" width="663.194" height="613" fill="url(#paint0_radial_842_3215)"></rect> </mask> <g mask="url(#mask0_842_3215)"> <rect x="0.805908" width="663.194" height="613" fill="url(#paint1_radial_842_3215)"></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M356.257 212.405C356.974 206.124 356.257 200.202 354.104 193.562C351.054 184.231 347.824 178.309 347.824 182.257C347.824 183.154 342.8 189.255 336.521 195.716C330.241 202.176 323.782 210.431 322.167 213.841C319.835 218.686 317.143 220.839 310.684 223.352C285.925 232.504 261.882 253.859 249.682 277.367C236.046 303.747 231.202 327.973 231.202 372.298C231.202 398.319 229.049 410.342 219.719 439.234L213.439 458.794L214.516 503.478L215.413 548.162L227.972 586.206C239.275 621.2 242.146 627.121 245.914 623.532C246.452 622.994 241.428 605.767 234.79 585.309L222.769 548.162L221.692 503.119C220.445 458.393 220.613 457.902 225.007 445.071L225.101 444.797C235.687 413.393 236.943 406.394 238.378 365.12C240.173 320.615 242.864 306.08 253.808 283.827C265.65 259.781 293.46 235.375 315.887 229.453C323.244 227.479 324.679 226.402 327.011 219.763C328.626 215.815 333.829 208.457 338.674 203.791L347.645 194.998L348.901 199.843C349.977 204.688 349.259 214.02 346.927 221.916C345.85 225.326 346.748 226.043 353.386 228.017C357.871 229.453 364.51 233.76 369.534 238.605C378.684 247.398 426.768 320.256 426.768 325.461C426.768 333.715 416.9 344.303 407.212 346.815C401.291 348.251 398.061 345.38 398.061 338.381C398.061 322.948 396.447 319.897 382.631 308.592C370.431 298.363 365.586 296.569 365.945 301.952C365.945 303.208 371.148 308.412 377.428 313.617C386.758 321.513 389.27 324.563 389.988 329.767C390.525 333.534 391.422 338.914 391.96 342.145L391.961 342.15C393.217 350.046 396.985 353.455 404.7 353.455C417.977 353.455 430.357 342.329 433.048 328.152C433.258 327.079 433.444 326.177 433.51 325.267C433.893 319.938 430.129 314.311 402.547 272.163C379.043 236.272 374.378 230.53 363.972 225.685L355.18 221.557L356.257 212.405ZM384.425 233.222C389.09 233.222 393.576 220.66 393.396 208.098C393.396 201.638 392.141 193.921 390.705 190.691L388.193 184.949L376.172 198.408C369.354 205.765 363.972 212.943 363.972 214.379C363.972 219.942 367.56 218.327 375.993 208.995C381.017 203.612 385.502 199.664 386.22 200.382C388.193 202.535 387.296 215.276 384.605 221.916C381.196 229.812 381.196 233.222 384.425 233.222ZM340.647 219.763C342.621 215.097 344.236 210.252 344.236 208.816C344.236 202.535 338.674 207.38 334.368 217.43C332.035 223.172 332.035 224.249 334.368 226.043C336.521 227.838 337.597 226.761 340.647 219.763ZM373.122 221.737C375.455 223.172 380.478 217.43 379.043 215.097C377.428 212.405 374.916 213.302 372.943 216.891C371.687 219.404 371.687 220.839 373.122 221.737ZM380.119 266.959C368.098 247.219 364.869 243.809 354.104 238.605C345.492 234.478 340.647 234.119 340.647 237.708C340.647 239.144 344.594 242.015 349.439 244.168C360.204 248.655 362.716 251.346 375.455 272.163C381.196 281.315 386.399 288.852 387.296 288.852C391.961 288.852 390.167 283.289 380.119 266.959ZM316.784 254.397C320.193 250.808 322.526 247.039 321.988 245.963C319.835 242.553 316.964 243.809 309.967 251.346C293.819 268.933 293.639 294.056 309.608 317.026C322.885 336.228 323.244 337.125 324.679 353.635C325.576 362.607 326.653 370.503 327.191 371.58C331.856 379.117 333.47 350.943 329.164 336.587C327.729 331.921 323.423 323.845 319.296 318.821C300.637 294.595 299.74 271.983 316.784 254.397ZM293.281 258.345C296.69 256.192 299.381 253.32 299.381 251.885C299.381 246.501 291.845 249.911 280.542 260.498C271.391 268.933 267.085 274.675 261.703 285.981C251.655 307.336 248.964 321.692 247.349 365.12C245.914 401.01 245.555 404.061 238.737 430.261C232.816 453.052 231.919 457.897 234.072 458.794C235.508 459.333 237.122 459.333 237.661 458.974C238.02 458.435 242.146 444.079 246.452 426.852C254.167 396.703 254.526 394.73 254.526 368.35C254.526 336.587 256.859 317.744 262.6 301.234C269.059 282.571 280.901 265.882 293.281 258.345ZM325.397 271.443C325.935 267.316 326.473 263.19 326.473 262.472C326.473 261.575 325.217 260.857 323.782 260.498C321.988 260.14 320.552 262.831 319.117 269.651C316.067 282.93 320.014 296.748 329.703 306.797L336.7 314.155L341.006 383.065L352.309 404.599C361.101 421.109 366.125 428.467 374.199 436.004C386.04 447.13 391.602 457.179 394.832 472.253C396.447 480.329 397.703 482.662 400.214 482.662C404.162 482.662 404.162 480.867 400.753 467.767C396.626 451.975 391.602 443.182 380.119 432.415C367.022 419.853 350.156 389.884 347.824 374.99C345.85 361.89 343.697 317.565 344.953 317.565C345.671 317.565 353.924 321.154 363.433 325.64C375.275 331.203 381.375 333.177 382.631 331.921C385.502 329.05 381.016 325.999 359.845 316.488C331.856 304.106 322.346 291.723 325.397 271.445L325.397 271.443ZM432.869 445.515C426.768 435.645 413.133 423.083 402.906 417.879C397.344 415.008 388.911 412.136 384.425 411.419C377.069 410.521 376.172 410.701 376.71 413.572C377.249 415.726 380.478 417.52 387.296 419.315C407.212 424.339 424.257 440.131 432.33 460.589C435.56 469.023 436.278 474.586 436.278 489.84C436.278 510.656 433.407 524.654 424.974 543.137C420.489 553.007 420.13 554.802 422.462 555.699C425.871 556.955 426.948 555.34 433.945 539.01C440.763 522.5 445.428 496.121 443.993 481.585C442.737 469.561 437.892 453.59 432.869 445.515ZM298.663 470.1C324.32 461.845 339.391 444.617 341.006 421.647C341.365 417.161 340.827 415.367 338.674 414.828C336.521 414.469 335.444 416.264 334.547 422.006C331.138 442.644 318.937 456.102 296.331 463.64C273.724 471.177 260.985 484.277 255.423 505.452C253.45 513.169 252.732 526.628 252.732 560.903C252.732 585.668 253.27 610.971 253.808 617.072L255.064 628.019H293.639L313.555 589.795L333.47 551.751L333.112 540.087C332.753 531.114 332.035 528.422 329.882 528.422C327.908 528.422 327.011 531.473 326.294 540.984C325.397 552.648 323.961 555.879 307.455 587.283L289.513 621.02L260.806 619.943V506.708L266.188 496.121C272.827 483.02 282.515 475.483 298.663 470.1Z" fill="white"></path> </g> <defs> <radialGradient id="paint0_radial_842_3215" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(332.403 719.317) rotate(-90) scale(522.888 565.703)"> <stop stop-color="#0066FF"></stop> <stop offset="1" stop-color="#282727"></stop> </radialGradient> <radialGradient id="paint1_radial_842_3215" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(332.403 719.317) rotate(-90) scale(522.888 565.703)"> <stop stop-color="#0066FF"></stop> <stop offset="1" stop-color="#282727"></stop> </radialGradient> </defs> </svg> `;
}, "/usr/local/var/www/magenta-magnitude/src/components/HorseImage.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Banner", $$Banner, { "title": "Being useful since 2007", "showHorse": true, "data-astro-cid-j7pv25f6": true })} <section class="strip text-center w-clamp-xl intro-section" data-astro-cid-j7pv25f6> <h2 class="text-4 fw-normal mb-2" data-astro-cid-j7pv25f6>
Techincal solutions to human problems
</h2> <p class="text-0" data-astro-cid-j7pv25f6>
A technical and creative digital agency supporting the people behind
        businesses large and small.
</p> </section> ${renderComponent($$result2, "Strip", $$Strip, { "theme": "DARK", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <div class="wrapper" data-astro-cid-j7pv25f6> <div class="grid" data-astro-cid-j7pv25f6> <div class="contents" data-astro-cid-j7pv25f6> <p class="text-1 fw-medium" data-astro-cid-j7pv25f6>
Lorem ipsum dolor sit amet, autem dicat aliquam ad ius, cu vel
              oblique equidem. Ne soleat delicata eos. Quo at eripuit propriae
              tacimates, enim debet doming an pri.
</p> <p class="text-0" data-astro-cid-j7pv25f6>
Lorem ipsum dolor sit amet, autem dicat aliquam ad ius, cu vel
              oblique equidem. Ne soleat delicata eos. Quo at eripuit propriae
              tacimates, enim debet doming an pri.
</p> </div> <div class="image" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "HorseImage", $$HorseImage, { "data-astro-cid-j7pv25f6": true })} </div> </div> </div> ` })} ${renderComponent($$result2, "GradientContentStrip", $$GradientContentStrip, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <p class="tag" data-astro-cid-j7pv25f6>Company</p> <h2 class="heading" data-astro-cid-j7pv25f6>Who we are</h2> <p data-astro-cid-j7pv25f6>
Ut has commune epicurei perpetua, in sit mazim delenit. Te legere
        eloquentiam est, duo laudem impetus te. Ea summo feugait nec, noster
        placerat mea ad, mel et mucius nusquam offendit. Nec an eros molestie,
        ut nec expetenda efficiantur. Meis commune oportere vim et. Vide
        vituperata eloquentiam ius id.
</p> <p data-astro-cid-j7pv25f6>
Te has repudiare moderatius, pro persius splendide id. Legere sententiae
        percipitur vim ne. Sit in timeam aliquip, eum pericula vituperatoribus
        in. Quo ei delicata electram evertitur, habeo quodsi te vel. Qui suas
        semper labores et, doming probatus pri ei. Quo libris semper doctus te,
        persius ocurreret definitiones ut eam, magna modus cotidieque eu ius.
</p> ` })} ${renderComponent($$result2, "Strip", $$Strip, { "theme": "DARK", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <div class="wrapper" data-astro-cid-j7pv25f6> <p class="tag" data-astro-cid-j7pv25f6>Services</p> <h2 class="heading" data-astro-cid-j7pv25f6>What can we do for you</h2> <section class="card-grid" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Card", $$Card, { "heading": "Something that will wrap a bit", "content": "Te has repudiare moderatius, pro persius splendide id. Legere sententiae percipitur vim ne.", "imageSrc": "/src/assets/placeholder-wide.png", "imageAlt": "Nothing", "link": "cookies", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result3, "Card", $$Card, { "heading": "Something that will wrap a bit", "content": "Te has repudiare moderatius, pro persius splendide id. Legere sententiae percipitur vim ne.", "imageSrc": "/src/assets/placeholder-wide.png", "imageAlt": "Nothing", "link": "cookies", "data-astro-cid-j7pv25f6": true })} </section> </div> ` })} ${renderComponent($$result2, "Strip", $$Strip, { "theme": "MID", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FeaturedProject", $$FeaturedProject, { "data-astro-cid-j7pv25f6": true })} ` })} ${renderComponent($$result2, "Clients", $$Clients, { "data-astro-cid-j7pv25f6": true })} </main> ` })} `;
}, "/usr/local/var/www/magenta-magnitude/src/pages/index.astro", void 0);

const $$file = "/usr/local/var/www/magenta-magnitude/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
