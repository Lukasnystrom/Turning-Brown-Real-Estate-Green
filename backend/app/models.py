from django.db import models

# Alla "models" är databas tables.

# Exempel (Modeller är klasser)

# class Post(models.Model):
#     title = models.CharField(max_length=200)
#     content = models.TextField()
#     published_date = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.title

### BYGGNAD / ASSET ####
class BasicBuildingDetails(models.Model):
    name_of_asset = models.CharField(max_length=255)
    asset_description = models.TextField()
    year_built = models.IntegerField(null=True, blank=True)
    year_built_specific = models.CharField(max_length=255, null=True, blank=True)
    most_recent_major_refurbishment = models.IntegerField(null=True, blank=True)
    full_asset_address = models.TextField()
    address_line1 = models.CharField(max_length=255)
    address_line2 = models.CharField(max_length=255, null=True, blank=True)
    address_line3 = models.CharField(max_length=255, null=True, blank=True)
    address_line4 = models.CharField(max_length=255, null=True, blank=True)
    town_city = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    county_region = models.CharField(max_length=255, null=True, blank=True)
    postcode_zip_code = models.CharField(max_length=50)
    asset_manager_name = models.CharField(max_length=255, null=True, blank=True)
    asset_ownership_name = models.CharField(max_length=255, null=True, blank=True)
    asset_tenancy_manager_name = models.CharField(max_length=255, null=True, blank=True)
    asset_occupier_name = models.CharField(max_length=255, null=True, blank=True)
    breeam_assessment_organisation_name = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.name_of_asset

class Occupancy(models.Model):
    basic_building_details = models.ForeignKey(BasicBuildingDetails, on_delete=models.CASCADE)
    number_of_occupants = models.IntegerField()
    annual_operational_days = models.IntegerField()
    daily_operational_hours = models.FloatField()

    def __str__(self):
        return f"{self.basic_building_details.name_of_asset} Occupancy"

class AssetDimensions(models.Model):
    basic_building_details = models.ForeignKey(BasicBuildingDetails, on_delete=models.CASCADE)
    gross_internal_area = models.FloatField()
    measurement_standard = models.CharField(max_length=255)
    non_lettable_area = models.FloatField(null=True, blank=True)
    gross_lettable_area = models.FloatField(null=True, blank=True)
    planning_restrictions = models.TextField(null=True, blank=True)
    width_external = models.FloatField(null=True, blank=True)
    length_external = models.FloatField(null=True, blank=True)
    height_floor_to_floor = models.FloatField(null=True, blank=True)
    number_of_floors_above_ground = models.IntegerField(null=True, blank=True)
    number_of_floors_below_ground = models.IntegerField(null=True, blank=True)
    area_covered_by_hard_landscaping = models.FloatField(null=True, blank=True)
    area_covered_by_soft_landscaping = models.FloatField(null=True, blank=True)

    def __str__(self):
        return f"{self.basic_building_details.name_of_asset} Dimensions"
    
class AssetType(models.Model):
    basic_building_details = models.ForeignKey(BasicBuildingDetails, on_delete=models.CASCADE)
    asset_type = models.CharField(max_length=255)
    asset_sub_type = models.CharField(max_length=255, null=True, blank=True)
    gross_internal_area = models.FloatField() # This seems to be duplicated

    def __str__(self):
        return f"{self.basic_building_details.name_of_asset} Type: {self.asset_type}"


### ASSET & MANAGEMENT PERFORMANCE ###
class AssetPerformance(models.Model):
    Hea01 = models.IntegerField() 
    Hea02 = models.IntegerField()
    Hea03 = models.IntegerField()
    Hea04 = models.IntegerField()
    Hea05 = models.IntegerField()
    Hea06 = models.IntegerField()
    Hea07 = models.IntegerField()
    Hea08 = models.IntegerField()
    Hea09 = models.IntegerField()
    Hea10 = models.IntegerField()
    Hea11 = models.IntegerField()
    Hea12 = models.IntegerField()
    Hea13 = models.IntegerField()
    Ene01 = models.IntegerField()
    Ene02 = models.IntegerField()
    Ene03 = models.IntegerField()
    Ene04 = models.IntegerField()
    Ene05 = models.IntegerField()
    Ene06 = models.IntegerField()
    Ene07 = models.IntegerField()
    Ene08 = models.IntegerField()
    Ene09 = models.IntegerField()
    Ene10 = models.IntegerField()
    Ene11 = models.IntegerField()
    Ene12 = models.IntegerField()
    Ene13 = models.IntegerField()
    Ene14 = models.IntegerField()
    Ene15 = models.IntegerField()
    Ene16 = models.IntegerField()
    Ene17 = models.IntegerField()
    Ene18 = models.IntegerField()
    Tra01 = models.IntegerField()
    Tra02 = models.IntegerField()
    Tra03 = models.IntegerField()
    Tra04 = models.IntegerField()
    Wat01 = models.IntegerField()
    Wat02 = models.IntegerField()
    Wat03 = models.IntegerField()
    Wat04 = models.IntegerField()
    Wat05 = models.IntegerField()
    Wat06 = models.IntegerField()
    Wat07 = models.IntegerField()
    Wat08 = models.IntegerField()
    Wat09 = models.IntegerField()
    Wat10 = models.IntegerField()
    Rsc01 = models.IntegerField()
    Rsc02 = models.IntegerField()
    Rsc03 = models.IntegerField()
    Rsc04 = models.IntegerField()
    Rsl01 = models.IntegerField()
    Rsl02 = models.IntegerField()
    Rsl03 = models.IntegerField()
    Rsl04 = models.IntegerField()
    Rsl05 = models.IntegerField()
    Lue01 = models.IntegerField()
    Lue02 = models.IntegerField()
    Pol01 = models.IntegerField()
    Pol02 = models.IntegerField()
    Pol03 = models.IntegerField()
    Pol04 = models.IntegerField()
    Pol05 = models.IntegerField()

    def __str__(self):
        return
    
class ManagementPerformance(models.Model):
    Hea14 = models.IntegerField()
    Hea15 = models.IntegerField()
    Hea16 = models.IntegerField()
    Hea17 = models.IntegerField()
    Hea18 = models.IntegerField()
    Hea19 = models.IntegerField()
    Ene19 = models.IntegerField()
    Ene20 = models.IntegerField()
    Ene21 = models.IntegerField()
    Ene22 = models.IntegerField()
    Ene23 = models.IntegerField()
    Ene24 = models.IntegerField()
    Wat11 = models.IntegerField() 
    Wat12 = models.IntegerField()
    Wat13 = models.IntegerField()
    Wat14 = models.IntegerField()
    Rsc05 = models.IntegerField()
    Rsc06 = models.IntegerField()
    Rsl06 = models.IntegerField()
    Rsl07 = models.IntegerField()
    Rsl08 = models.IntegerField()
    Rsl09 = models.IntegerField()
    Rsl10 = models.IntegerField()
    Lue03 = models.IntegerField()
    Lue04 = models.IntegerField()
    Pol06 = models.IntegerField()
    Pol07 = models.IntegerField()
    Pol08 = models.IntegerField()
    Pol09 = models.IntegerField()
    Pol10 = models.IntegerField()

    def __str__(self):
        return