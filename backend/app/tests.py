from django.test import TestCase

# Create your tests here.

from .models import BasicBuildingDetails, AssetPerformance

class BasicBuildingDetailsTest(TestCase):
    def setUp(self):
        # Setup run before every test method.
        BasicBuildingDetails.objects.create(
            name_of_asset="Test Building",
            asset_description="A building for testing purposes.",
            year_built=1990,
            full_asset_address="123 Test Lane, Testville",
            address_line1="123 Test Lane",
            town_city="Testville",
            country="Testland",
            postcode_zip_code="TEST123",
        )

    def test_basic_building_details_creation(self):
        """Test the basic building details model can be created with required fields."""
        building = BasicBuildingDetails.objects.get(name_of_asset="Test Building")
        self.assertEqual(building.asset_description, "A building for testing purposes.")
        self.assertEqual(building.year_built, 1990)
        self.assertEqual(building.full_asset_address, "123 Test Lane, Testville")
        self.assertEqual(building.address_line1, "123 Test Lane")
        self.assertEqual(building.town_city, "Testville")
        self.assertEqual(building.country, "Testland")
        self.assertEqual(building.postcode_zip_code, "TEST123")

    def test_string_representation(self):
        """Test the string representation of the model."""
        building = BasicBuildingDetails.objects.get(name_of_asset="Test Building")
        self.assertEqual(str(building), "Test Building")

    # Add more tests here as needed, for example, to test custom methods or more complex model behavior.

class AssetPerformanceTest(TestCase):
    def setUp(self):
        # Set up data for the whole TestCase
        self.building = BasicBuildingDetails.objects.create(
            name_of_asset="Test Building",
            asset_description="A description of the test building.",
            full_asset_address="123 Test St, Test Town",
            address_line1="123 Test St",
            town_city="Test Town",
            country="Test Country",
            postcode_zip_code="TEST123",
        )
        self.asset_performance = AssetPerformance.objects.create(
            basic_building_details=self.building,
            Hea01=0,  # Initialize some fields with default or initial values
            Ene02=0,
            # Initialize other fields as necessary
        )

    def test_update_performance_scores(self):
        # Define the updates
        updates = {
            'Hea01': 100,
            'Ene02': 95,
            # Add more updates as needed
        }

        # Perform the update
        self.asset_performance.update_performance_scores(updates)

        # Fetch the updated instance from the database
        updated_performance = AssetPerformance.objects.get(id=self.asset_performance.id)

        # Assert that the fields were updated as expected
        self.assertEqual(updated_performance.Hea01, 100)
        self.assertEqual(updated_performance.Ene02, 95)
        # Add more assertions as necessary for other fields

