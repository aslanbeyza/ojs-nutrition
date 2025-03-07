import { useState } from "react";
import { Container, Typography, Radio, RadioGroup, FormControlLabel, Button, Box, Paper } from "@mui/material";

const initialAddresses = [
  {
    id: 1,
    label: "Ev",
    details: "Ahmet Mah. Mehmetoğlu Sk., No: 1 Daire: 2, Ataşehir, İstanbul, Türkiye",
  },
  {
    id: 2,
    label: "Ofis",
    details: "Ayşe Mah. Fatmaoğlu Cad., No: 4 D: 4, Ataşehir, İstanbul, Türkiye",
  },
];

const Checkout = () => {
  const [selectedAddress, setSelectedAddress] = useState(initialAddresses[0].id);
  const [addresses] = useState(initialAddresses);
  const [showShippingOptions, setShowShippingOptions] = useState(false);

  const handleSelectAddress = (event: { target: { value: string; }; }) => {
    setSelectedAddress(parseInt(event.target.value));
  };

  const handleContinueToShipping = () => {
    setShowShippingOptions(true);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Adres
      </Typography>
      <Typography variant="subtitle1">Teslimat Adresi</Typography>
      <RadioGroup value={selectedAddress} onChange={handleSelectAddress}>
        {addresses.map((address) => (
          <Paper key={address.id} sx={{ p: 2, my: 1, display: "flex", alignItems: "center", justifyContent: "space-between", border: selectedAddress === address.id ? "2px solid #000" : "1px solid #ccc" }}>
            <Box>
              <FormControlLabel value={address.id} control={<Radio />} label={address.label} />
              <Typography variant="body2" color="textSecondary">
                {address.details}
              </Typography>
            </Box>
            <Button variant="text">Düzenle</Button>
          </Paper>
        ))}
        <Paper sx={{ p: 2, my: 1 }}>
          <FormControlLabel value={-1} control={<Radio />} label="Yeni Adres" />
        </Paper>
      </RadioGroup>
      <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleContinueToShipping}>
        Kargo ile Devam Et
      </Button>

      {showShippingOptions && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Kargo Seçenekleri
          </Typography>
          <RadioGroup>
            <FormControlLabel value="kargo1" control={<Radio />} label="Standart Kargo" />
            <FormControlLabel value="kargo2" control={<Radio />} label="Hızlı Kargo" />
          </RadioGroup>

          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Ödeme Seçenekleri
          </Typography>
          <RadioGroup>
            <FormControlLabel value="krediKarti" control={<Radio />} label="Kredi Kartı" />
            <FormControlLabel value="kapidaOdeme" control={<Radio />} label="Kapıda Ödeme" />
          </RadioGroup>

          <Button fullWidth variant="contained" sx={{ mt: 2 }}>
            Ödeme Yap
          </Button>
        </Box>
      )}

      <Box sx={{ mt: 2, textAlign: "center" }}>
        <Typography variant="body2" color="textSecondary">
          Para İade Politikası • Gizlilik Politikası • Hizmet Şartları
        </Typography>
      </Box>
    </Container>
  );
};

export default Checkout;