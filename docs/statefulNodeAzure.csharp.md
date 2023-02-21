# `statefulNodeAzure` Submodule <a name="`statefulNodeAzure` Submodule" id="@cdktf/provider-spotinst.statefulNodeAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StatefulNodeAzure <a name="StatefulNodeAzure" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure"></a>

Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure spotinst_stateful_node_azure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzure(Construct Scope, string Id, StatefulNodeAzureConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig">StatefulNodeAzureConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig">StatefulNodeAzureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putAttachDataDisk">PutAttachDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putBootDiagnostics">PutBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDataDisk">PutDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDelete">PutDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDetachDataDisk">PutDetachDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putExtension">PutExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putHealth">PutHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putImage">PutImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putImportVm">PutImportVm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putLoadBalancer">PutLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putLogin">PutLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putManagedServiceIdentities">PutManagedServiceIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putOsDisk">PutOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSchedulingTask">PutSchedulingTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSignal">PutSignal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putStrategy">PutStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putUpdateState">PutUpdateState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetAttachDataDisk">ResetAttachDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetBootDiagnostics">ResetBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetCustomData">ResetCustomData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDataDisk">ResetDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDataDisksPersistenceMode">ResetDataDisksPersistenceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDetachDataDisk">ResetDetachDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetExtension">ResetExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetHealth">ResetHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetImportVm">ResetImportVm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetLoadBalancer">ResetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetManagedServiceIdentities">ResetManagedServiceIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetOsDisk">ResetOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetOsDiskPersistenceMode">ResetOsDiskPersistenceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetPreferredSpotSizes">ResetPreferredSpotSizes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetPreferredZones">ResetPreferredZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetSchedulingTask">ResetSchedulingTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetShouldPersistVm">ResetShouldPersistVm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetShutdownScript">ResetShutdownScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetSignal">ResetSignal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetUpdateState">ResetUpdateState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetZones">ResetZones</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAttachDataDisk` <a name="PutAttachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putAttachDataDisk"></a>

```csharp
private void PutAttachDataDisk(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putAttachDataDisk.parameter.value"></a>

- *Type:* object

---

##### `PutBootDiagnostics` <a name="PutBootDiagnostics" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putBootDiagnostics"></a>

```csharp
private void PutBootDiagnostics(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putBootDiagnostics.parameter.value"></a>

- *Type:* object

---

##### `PutDataDisk` <a name="PutDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDataDisk"></a>

```csharp
private void PutDataDisk(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDataDisk.parameter.value"></a>

- *Type:* object

---

##### `PutDelete` <a name="PutDelete" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDelete"></a>

```csharp
private void PutDelete(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDelete.parameter.value"></a>

- *Type:* object

---

##### `PutDetachDataDisk` <a name="PutDetachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDetachDataDisk"></a>

```csharp
private void PutDetachDataDisk(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDetachDataDisk.parameter.value"></a>

- *Type:* object

---

##### `PutExtension` <a name="PutExtension" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putExtension"></a>

```csharp
private void PutExtension(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putExtension.parameter.value"></a>

- *Type:* object

---

##### `PutHealth` <a name="PutHealth" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putHealth"></a>

```csharp
private void PutHealth(StatefulNodeAzureHealth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putHealth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a>

---

##### `PutImage` <a name="PutImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putImage"></a>

```csharp
private void PutImage(StatefulNodeAzureImage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a>

---

##### `PutImportVm` <a name="PutImportVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putImportVm"></a>

```csharp
private void PutImportVm(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putImportVm.parameter.value"></a>

- *Type:* object

---

##### `PutLoadBalancer` <a name="PutLoadBalancer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putLoadBalancer"></a>

```csharp
private void PutLoadBalancer(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putLoadBalancer.parameter.value"></a>

- *Type:* object

---

##### `PutLogin` <a name="PutLogin" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putLogin"></a>

```csharp
private void PutLogin(StatefulNodeAzureLogin Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putLogin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a>

---

##### `PutManagedServiceIdentities` <a name="PutManagedServiceIdentities" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putManagedServiceIdentities"></a>

```csharp
private void PutManagedServiceIdentities(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putManagedServiceIdentities.parameter.value"></a>

- *Type:* object

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putNetwork"></a>

```csharp
private void PutNetwork(StatefulNodeAzureNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a>

---

##### `PutOsDisk` <a name="PutOsDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putOsDisk"></a>

```csharp
private void PutOsDisk(StatefulNodeAzureOsDisk Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putOsDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a>

---

##### `PutSchedulingTask` <a name="PutSchedulingTask" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSchedulingTask"></a>

```csharp
private void PutSchedulingTask(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSchedulingTask.parameter.value"></a>

- *Type:* object

---

##### `PutSecret` <a name="PutSecret" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSecret"></a>

```csharp
private void PutSecret(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSecret.parameter.value"></a>

- *Type:* object

---

##### `PutSignal` <a name="PutSignal" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSignal"></a>

```csharp
private void PutSignal(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSignal.parameter.value"></a>

- *Type:* object

---

##### `PutStrategy` <a name="PutStrategy" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putStrategy"></a>

```csharp
private void PutStrategy(StatefulNodeAzureStrategy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a>

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putTag"></a>

```csharp
private void PutTag(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putTag.parameter.value"></a>

- *Type:* object

---

##### `PutUpdateState` <a name="PutUpdateState" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putUpdateState"></a>

```csharp
private void PutUpdateState(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putUpdateState.parameter.value"></a>

- *Type:* object

---

##### `ResetAttachDataDisk` <a name="ResetAttachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetAttachDataDisk"></a>

```csharp
private void ResetAttachDataDisk()
```

##### `ResetBootDiagnostics` <a name="ResetBootDiagnostics" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetBootDiagnostics"></a>

```csharp
private void ResetBootDiagnostics()
```

##### `ResetCustomData` <a name="ResetCustomData" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetCustomData"></a>

```csharp
private void ResetCustomData()
```

##### `ResetDataDisk` <a name="ResetDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDataDisk"></a>

```csharp
private void ResetDataDisk()
```

##### `ResetDataDisksPersistenceMode` <a name="ResetDataDisksPersistenceMode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDataDisksPersistenceMode"></a>

```csharp
private void ResetDataDisksPersistenceMode()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDetachDataDisk` <a name="ResetDetachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDetachDataDisk"></a>

```csharp
private void ResetDetachDataDisk()
```

##### `ResetExtension` <a name="ResetExtension" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetExtension"></a>

```csharp
private void ResetExtension()
```

##### `ResetHealth` <a name="ResetHealth" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetHealth"></a>

```csharp
private void ResetHealth()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImportVm` <a name="ResetImportVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetImportVm"></a>

```csharp
private void ResetImportVm()
```

##### `ResetLoadBalancer` <a name="ResetLoadBalancer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetLoadBalancer"></a>

```csharp
private void ResetLoadBalancer()
```

##### `ResetManagedServiceIdentities` <a name="ResetManagedServiceIdentities" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetManagedServiceIdentities"></a>

```csharp
private void ResetManagedServiceIdentities()
```

##### `ResetOsDisk` <a name="ResetOsDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetOsDisk"></a>

```csharp
private void ResetOsDisk()
```

##### `ResetOsDiskPersistenceMode` <a name="ResetOsDiskPersistenceMode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetOsDiskPersistenceMode"></a>

```csharp
private void ResetOsDiskPersistenceMode()
```

##### `ResetPreferredSpotSizes` <a name="ResetPreferredSpotSizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetPreferredSpotSizes"></a>

```csharp
private void ResetPreferredSpotSizes()
```

##### `ResetPreferredZones` <a name="ResetPreferredZones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetPreferredZones"></a>

```csharp
private void ResetPreferredZones()
```

##### `ResetSchedulingTask` <a name="ResetSchedulingTask" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetSchedulingTask"></a>

```csharp
private void ResetSchedulingTask()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetSecret"></a>

```csharp
private void ResetSecret()
```

##### `ResetShouldPersistVm` <a name="ResetShouldPersistVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetShouldPersistVm"></a>

```csharp
private void ResetShouldPersistVm()
```

##### `ResetShutdownScript` <a name="ResetShutdownScript" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetShutdownScript"></a>

```csharp
private void ResetShutdownScript()
```

##### `ResetSignal` <a name="ResetSignal" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetSignal"></a>

```csharp
private void ResetSignal()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetTag"></a>

```csharp
private void ResetTag()
```

##### `ResetUpdateState` <a name="ResetUpdateState" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetUpdateState"></a>

```csharp
private void ResetUpdateState()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetZones"></a>

```csharp
private void ResetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

StatefulNodeAzure.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

StatefulNodeAzure.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

StatefulNodeAzure.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.attachDataDisk">AttachDataDisk</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList">StatefulNodeAzureAttachDataDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.bootDiagnostics">BootDiagnostics</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList">StatefulNodeAzureBootDiagnosticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDisk">DataDisk</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList">StatefulNodeAzureDataDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.delete">Delete</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList">StatefulNodeAzureDeleteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.detachDataDisk">DetachDataDisk</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList">StatefulNodeAzureDetachDataDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.extension">Extension</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList">StatefulNodeAzureExtensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.health">Health</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference">StatefulNodeAzureHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.image">Image</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference">StatefulNodeAzureImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.importVm">ImportVm</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList">StatefulNodeAzureImportVmList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList">StatefulNodeAzureLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.login">Login</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference">StatefulNodeAzureLoginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.managedServiceIdentities">ManagedServiceIdentities</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList">StatefulNodeAzureManagedServiceIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.network">Network</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference">StatefulNodeAzureNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDisk">OsDisk</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference">StatefulNodeAzureOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.schedulingTask">SchedulingTask</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList">StatefulNodeAzureSchedulingTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList">StatefulNodeAzureSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.signal">Signal</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList">StatefulNodeAzureSignalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.strategy">Strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference">StatefulNodeAzureStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList">StatefulNodeAzureTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.updateState">UpdateState</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList">StatefulNodeAzureUpdateStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.attachDataDiskInput">AttachDataDiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.bootDiagnosticsInput">BootDiagnosticsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.customDataInput">CustomDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDiskInput">DataDiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDisksPersistenceModeInput">DataDisksPersistenceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.deleteInput">DeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.detachDataDiskInput">DetachDataDiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.extensionInput">ExtensionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.healthInput">HealthInput</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.imageInput">ImageInput</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.importVmInput">ImportVmInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.loadBalancerInput">LoadBalancerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.loginInput">LoginInput</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.managedServiceIdentitiesInput">ManagedServiceIdentitiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.odSizesInput">OdSizesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDiskInput">OsDiskInput</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDiskPersistenceModeInput">OsDiskPersistenceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osInput">OsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredSpotSizesInput">PreferredSpotSizesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredZonesInput">PreferredZonesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.schedulingTaskInput">SchedulingTaskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.secretInput">SecretInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistDataDisksInput">ShouldPersistDataDisksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistNetworkInput">ShouldPersistNetworkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistOsDiskInput">ShouldPersistOsDiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistVmInput">ShouldPersistVmInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shutdownScriptInput">ShutdownScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.signalInput">SignalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.spotSizesInput">SpotSizesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.strategyInput">StrategyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.tagInput">TagInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.updateStateInput">UpdateStateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.zonesInput">ZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.customData">CustomData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDisksPersistenceMode">DataDisksPersistenceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.odSizes">OdSizes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.os">Os</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDiskPersistenceMode">OsDiskPersistenceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredSpotSizes">PreferredSpotSizes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredZones">PreferredZones</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistDataDisks">ShouldPersistDataDisks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistNetwork">ShouldPersistNetwork</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistOsDisk">ShouldPersistOsDisk</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistVm">ShouldPersistVm</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shutdownScript">ShutdownScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.spotSizes">SpotSizes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.zones">Zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AttachDataDisk`<sup>Required</sup> <a name="AttachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.attachDataDisk"></a>

```csharp
public StatefulNodeAzureAttachDataDiskList AttachDataDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList">StatefulNodeAzureAttachDataDiskList</a>

---

##### `BootDiagnostics`<sup>Required</sup> <a name="BootDiagnostics" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.bootDiagnostics"></a>

```csharp
public StatefulNodeAzureBootDiagnosticsList BootDiagnostics { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList">StatefulNodeAzureBootDiagnosticsList</a>

---

##### `DataDisk`<sup>Required</sup> <a name="DataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDisk"></a>

```csharp
public StatefulNodeAzureDataDiskList DataDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList">StatefulNodeAzureDataDiskList</a>

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.delete"></a>

```csharp
public StatefulNodeAzureDeleteList Delete { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList">StatefulNodeAzureDeleteList</a>

---

##### `DetachDataDisk`<sup>Required</sup> <a name="DetachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.detachDataDisk"></a>

```csharp
public StatefulNodeAzureDetachDataDiskList DetachDataDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList">StatefulNodeAzureDetachDataDiskList</a>

---

##### `Extension`<sup>Required</sup> <a name="Extension" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.extension"></a>

```csharp
public StatefulNodeAzureExtensionList Extension { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList">StatefulNodeAzureExtensionList</a>

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.health"></a>

```csharp
public StatefulNodeAzureHealthOutputReference Health { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference">StatefulNodeAzureHealthOutputReference</a>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.image"></a>

```csharp
public StatefulNodeAzureImageOutputReference Image { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference">StatefulNodeAzureImageOutputReference</a>

---

##### `ImportVm`<sup>Required</sup> <a name="ImportVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.importVm"></a>

```csharp
public StatefulNodeAzureImportVmList ImportVm { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList">StatefulNodeAzureImportVmList</a>

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.loadBalancer"></a>

```csharp
public StatefulNodeAzureLoadBalancerList LoadBalancer { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList">StatefulNodeAzureLoadBalancerList</a>

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.login"></a>

```csharp
public StatefulNodeAzureLoginOutputReference Login { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference">StatefulNodeAzureLoginOutputReference</a>

---

##### `ManagedServiceIdentities`<sup>Required</sup> <a name="ManagedServiceIdentities" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.managedServiceIdentities"></a>

```csharp
public StatefulNodeAzureManagedServiceIdentitiesList ManagedServiceIdentities { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList">StatefulNodeAzureManagedServiceIdentitiesList</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.network"></a>

```csharp
public StatefulNodeAzureNetworkOutputReference Network { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference">StatefulNodeAzureNetworkOutputReference</a>

---

##### `OsDisk`<sup>Required</sup> <a name="OsDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDisk"></a>

```csharp
public StatefulNodeAzureOsDiskOutputReference OsDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference">StatefulNodeAzureOsDiskOutputReference</a>

---

##### `SchedulingTask`<sup>Required</sup> <a name="SchedulingTask" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.schedulingTask"></a>

```csharp
public StatefulNodeAzureSchedulingTaskList SchedulingTask { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList">StatefulNodeAzureSchedulingTaskList</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.secret"></a>

```csharp
public StatefulNodeAzureSecretList Secret { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList">StatefulNodeAzureSecretList</a>

---

##### `Signal`<sup>Required</sup> <a name="Signal" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.signal"></a>

```csharp
public StatefulNodeAzureSignalList Signal { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList">StatefulNodeAzureSignalList</a>

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.strategy"></a>

```csharp
public StatefulNodeAzureStrategyOutputReference Strategy { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference">StatefulNodeAzureStrategyOutputReference</a>

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.tag"></a>

```csharp
public StatefulNodeAzureTagList Tag { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList">StatefulNodeAzureTagList</a>

---

##### `UpdateState`<sup>Required</sup> <a name="UpdateState" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.updateState"></a>

```csharp
public StatefulNodeAzureUpdateStateList UpdateState { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList">StatefulNodeAzureUpdateStateList</a>

---

##### `AttachDataDiskInput`<sup>Optional</sup> <a name="AttachDataDiskInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.attachDataDiskInput"></a>

```csharp
public object AttachDataDiskInput { get; }
```

- *Type:* object

---

##### `BootDiagnosticsInput`<sup>Optional</sup> <a name="BootDiagnosticsInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.bootDiagnosticsInput"></a>

```csharp
public object BootDiagnosticsInput { get; }
```

- *Type:* object

---

##### `CustomDataInput`<sup>Optional</sup> <a name="CustomDataInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.customDataInput"></a>

```csharp
public string CustomDataInput { get; }
```

- *Type:* string

---

##### `DataDiskInput`<sup>Optional</sup> <a name="DataDiskInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDiskInput"></a>

```csharp
public object DataDiskInput { get; }
```

- *Type:* object

---

##### `DataDisksPersistenceModeInput`<sup>Optional</sup> <a name="DataDisksPersistenceModeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDisksPersistenceModeInput"></a>

```csharp
public string DataDisksPersistenceModeInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.deleteInput"></a>

```csharp
public object DeleteInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DetachDataDiskInput`<sup>Optional</sup> <a name="DetachDataDiskInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.detachDataDiskInput"></a>

```csharp
public object DetachDataDiskInput { get; }
```

- *Type:* object

---

##### `ExtensionInput`<sup>Optional</sup> <a name="ExtensionInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.extensionInput"></a>

```csharp
public object ExtensionInput { get; }
```

- *Type:* object

---

##### `HealthInput`<sup>Optional</sup> <a name="HealthInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.healthInput"></a>

```csharp
public StatefulNodeAzureHealth HealthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.imageInput"></a>

```csharp
public StatefulNodeAzureImage ImageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a>

---

##### `ImportVmInput`<sup>Optional</sup> <a name="ImportVmInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.importVmInput"></a>

```csharp
public object ImportVmInput { get; }
```

- *Type:* object

---

##### `LoadBalancerInput`<sup>Optional</sup> <a name="LoadBalancerInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.loadBalancerInput"></a>

```csharp
public object LoadBalancerInput { get; }
```

- *Type:* object

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.loginInput"></a>

```csharp
public StatefulNodeAzureLogin LoginInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a>

---

##### `ManagedServiceIdentitiesInput`<sup>Optional</sup> <a name="ManagedServiceIdentitiesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.managedServiceIdentitiesInput"></a>

```csharp
public object ManagedServiceIdentitiesInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.networkInput"></a>

```csharp
public StatefulNodeAzureNetwork NetworkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a>

---

##### `OdSizesInput`<sup>Optional</sup> <a name="OdSizesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.odSizesInput"></a>

```csharp
public string[] OdSizesInput { get; }
```

- *Type:* string[]

---

##### `OsDiskInput`<sup>Optional</sup> <a name="OsDiskInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDiskInput"></a>

```csharp
public StatefulNodeAzureOsDisk OsDiskInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a>

---

##### `OsDiskPersistenceModeInput`<sup>Optional</sup> <a name="OsDiskPersistenceModeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDiskPersistenceModeInput"></a>

```csharp
public string OsDiskPersistenceModeInput { get; }
```

- *Type:* string

---

##### `OsInput`<sup>Optional</sup> <a name="OsInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osInput"></a>

```csharp
public string OsInput { get; }
```

- *Type:* string

---

##### `PreferredSpotSizesInput`<sup>Optional</sup> <a name="PreferredSpotSizesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredSpotSizesInput"></a>

```csharp
public string[] PreferredSpotSizesInput { get; }
```

- *Type:* string[]

---

##### `PreferredZonesInput`<sup>Optional</sup> <a name="PreferredZonesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredZonesInput"></a>

```csharp
public string PreferredZonesInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SchedulingTaskInput`<sup>Optional</sup> <a name="SchedulingTaskInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.schedulingTaskInput"></a>

```csharp
public object SchedulingTaskInput { get; }
```

- *Type:* object

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.secretInput"></a>

```csharp
public object SecretInput { get; }
```

- *Type:* object

---

##### `ShouldPersistDataDisksInput`<sup>Optional</sup> <a name="ShouldPersistDataDisksInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistDataDisksInput"></a>

```csharp
public object ShouldPersistDataDisksInput { get; }
```

- *Type:* object

---

##### `ShouldPersistNetworkInput`<sup>Optional</sup> <a name="ShouldPersistNetworkInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistNetworkInput"></a>

```csharp
public object ShouldPersistNetworkInput { get; }
```

- *Type:* object

---

##### `ShouldPersistOsDiskInput`<sup>Optional</sup> <a name="ShouldPersistOsDiskInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistOsDiskInput"></a>

```csharp
public object ShouldPersistOsDiskInput { get; }
```

- *Type:* object

---

##### `ShouldPersistVmInput`<sup>Optional</sup> <a name="ShouldPersistVmInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistVmInput"></a>

```csharp
public object ShouldPersistVmInput { get; }
```

- *Type:* object

---

##### `ShutdownScriptInput`<sup>Optional</sup> <a name="ShutdownScriptInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shutdownScriptInput"></a>

```csharp
public string ShutdownScriptInput { get; }
```

- *Type:* string

---

##### `SignalInput`<sup>Optional</sup> <a name="SignalInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.signalInput"></a>

```csharp
public object SignalInput { get; }
```

- *Type:* object

---

##### `SpotSizesInput`<sup>Optional</sup> <a name="SpotSizesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.spotSizesInput"></a>

```csharp
public string[] SpotSizesInput { get; }
```

- *Type:* string[]

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.strategyInput"></a>

```csharp
public StatefulNodeAzureStrategy StrategyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a>

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.tagInput"></a>

```csharp
public object TagInput { get; }
```

- *Type:* object

---

##### `UpdateStateInput`<sup>Optional</sup> <a name="UpdateStateInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.updateStateInput"></a>

```csharp
public object UpdateStateInput { get; }
```

- *Type:* object

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.zonesInput"></a>

```csharp
public string[] ZonesInput { get; }
```

- *Type:* string[]

---

##### `CustomData`<sup>Required</sup> <a name="CustomData" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.customData"></a>

```csharp
public string CustomData { get; }
```

- *Type:* string

---

##### `DataDisksPersistenceMode`<sup>Required</sup> <a name="DataDisksPersistenceMode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDisksPersistenceMode"></a>

```csharp
public string DataDisksPersistenceMode { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OdSizes`<sup>Required</sup> <a name="OdSizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.odSizes"></a>

```csharp
public string[] OdSizes { get; }
```

- *Type:* string[]

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.os"></a>

```csharp
public string Os { get; }
```

- *Type:* string

---

##### `OsDiskPersistenceMode`<sup>Required</sup> <a name="OsDiskPersistenceMode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDiskPersistenceMode"></a>

```csharp
public string OsDiskPersistenceMode { get; }
```

- *Type:* string

---

##### `PreferredSpotSizes`<sup>Required</sup> <a name="PreferredSpotSizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredSpotSizes"></a>

```csharp
public string[] PreferredSpotSizes { get; }
```

- *Type:* string[]

---

##### `PreferredZones`<sup>Required</sup> <a name="PreferredZones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredZones"></a>

```csharp
public string PreferredZones { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `ShouldPersistDataDisks`<sup>Required</sup> <a name="ShouldPersistDataDisks" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistDataDisks"></a>

```csharp
public object ShouldPersistDataDisks { get; }
```

- *Type:* object

---

##### `ShouldPersistNetwork`<sup>Required</sup> <a name="ShouldPersistNetwork" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistNetwork"></a>

```csharp
public object ShouldPersistNetwork { get; }
```

- *Type:* object

---

##### `ShouldPersistOsDisk`<sup>Required</sup> <a name="ShouldPersistOsDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistOsDisk"></a>

```csharp
public object ShouldPersistOsDisk { get; }
```

- *Type:* object

---

##### `ShouldPersistVm`<sup>Required</sup> <a name="ShouldPersistVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistVm"></a>

```csharp
public object ShouldPersistVm { get; }
```

- *Type:* object

---

##### `ShutdownScript`<sup>Required</sup> <a name="ShutdownScript" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shutdownScript"></a>

```csharp
public string ShutdownScript { get; }
```

- *Type:* string

---

##### `SpotSizes`<sup>Required</sup> <a name="SpotSizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.spotSizes"></a>

```csharp
public string[] SpotSizes { get; }
```

- *Type:* string[]

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.zones"></a>

```csharp
public string[] Zones { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StatefulNodeAzureAttachDataDisk <a name="StatefulNodeAzureAttachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureAttachDataDisk {
    string DataDiskName,
    string DataDiskResourceGroupName,
    double SizeGb,
    string StorageAccountType,
    double Lun = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.dataDiskName">DataDiskName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_name StatefulNodeAzure#data_disk_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.dataDiskResourceGroupName">DataDiskResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_resource_group_name StatefulNodeAzure#data_disk_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.sizeGb">SizeGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#storage_account_type StatefulNodeAzure#storage_account_type}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.lun">Lun</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#lun StatefulNodeAzure#lun}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.zone">Zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#zone StatefulNodeAzure#zone}. |

---

##### `DataDiskName`<sup>Required</sup> <a name="DataDiskName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.dataDiskName"></a>

```csharp
public string DataDiskName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_name StatefulNodeAzure#data_disk_name}.

---

##### `DataDiskResourceGroupName`<sup>Required</sup> <a name="DataDiskResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.dataDiskResourceGroupName"></a>

```csharp
public string DataDiskResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_resource_group_name StatefulNodeAzure#data_disk_resource_group_name}.

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.sizeGb"></a>

```csharp
public double SizeGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}.

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#storage_account_type StatefulNodeAzure#storage_account_type}.

---

##### `Lun`<sup>Optional</sup> <a name="Lun" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.lun"></a>

```csharp
public double Lun { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#lun StatefulNodeAzure#lun}.

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#zone StatefulNodeAzure#zone}.

---

### StatefulNodeAzureBootDiagnostics <a name="StatefulNodeAzureBootDiagnostics" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureBootDiagnostics {
    object IsEnabled = null,
    string StorageUrl = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#is_enabled StatefulNodeAzure#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.property.storageUrl">StorageUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#storage_url StatefulNodeAzure#storage_url}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#is_enabled StatefulNodeAzure#is_enabled}.

---

##### `StorageUrl`<sup>Optional</sup> <a name="StorageUrl" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.property.storageUrl"></a>

```csharp
public string StorageUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#storage_url StatefulNodeAzure#storage_url}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}.

---

### StatefulNodeAzureConfig <a name="StatefulNodeAzureConfig" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    StatefulNodeAzureImage Image,
    StatefulNodeAzureLogin Login,
    string Name,
    StatefulNodeAzureNetwork Network,
    string[] OdSizes,
    string Os,
    string Region,
    string ResourceGroupName,
    object ShouldPersistDataDisks,
    object ShouldPersistNetwork,
    object ShouldPersistOsDisk,
    string[] SpotSizes,
    StatefulNodeAzureStrategy Strategy,
    object AttachDataDisk = null,
    object BootDiagnostics = null,
    string CustomData = null,
    object DataDisk = null,
    string DataDisksPersistenceMode = null,
    object Delete = null,
    string Description = null,
    object DetachDataDisk = null,
    object Extension = null,
    StatefulNodeAzureHealth Health = null,
    string Id = null,
    object ImportVm = null,
    object LoadBalancer = null,
    object ManagedServiceIdentities = null,
    StatefulNodeAzureOsDisk OsDisk = null,
    string OsDiskPersistenceMode = null,
    string[] PreferredSpotSizes = null,
    string PreferredZones = null,
    object SchedulingTask = null,
    object Secret = null,
    object ShouldPersistVm = null,
    string ShutdownScript = null,
    object Signal = null,
    object Tag = null,
    object UpdateState = null,
    string[] Zones = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.image">Image</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a></code> | image block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.login">Login</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a></code> | login block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.network">Network</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.odSizes">OdSizes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#od_sizes StatefulNodeAzure#od_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.os">Os</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#os StatefulNodeAzure#os}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#region StatefulNodeAzure#region}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistDataDisks">ShouldPersistDataDisks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_data_disks StatefulNodeAzure#should_persist_data_disks}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistNetwork">ShouldPersistNetwork</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_network StatefulNodeAzure#should_persist_network}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistOsDisk">ShouldPersistOsDisk</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_os_disk StatefulNodeAzure#should_persist_os_disk}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.spotSizes">SpotSizes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#spot_sizes StatefulNodeAzure#spot_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.strategy">Strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a></code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.attachDataDisk">AttachDataDisk</a></code> | <code>object</code> | attach_data_disk block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.bootDiagnostics">BootDiagnostics</a></code> | <code>object</code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.customData">CustomData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#custom_data StatefulNodeAzure#custom_data}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.dataDisk">DataDisk</a></code> | <code>object</code> | data_disk block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.dataDisksPersistenceMode">DataDisksPersistenceMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disks_persistence_mode StatefulNodeAzure#data_disks_persistence_mode}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.delete">Delete</a></code> | <code>object</code> | delete block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#description StatefulNodeAzure#description}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.detachDataDisk">DetachDataDisk</a></code> | <code>object</code> | detach_data_disk block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.extension">Extension</a></code> | <code>object</code> | extension block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.health">Health</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#id StatefulNodeAzure#id}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.importVm">ImportVm</a></code> | <code>object</code> | import_vm block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.loadBalancer">LoadBalancer</a></code> | <code>object</code> | load_balancer block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.managedServiceIdentities">ManagedServiceIdentities</a></code> | <code>object</code> | managed_service_identities block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.osDisk">OsDisk</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.osDiskPersistenceMode">OsDiskPersistenceMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#os_disk_persistence_mode StatefulNodeAzure#os_disk_persistence_mode}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.preferredSpotSizes">PreferredSpotSizes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_spot_sizes StatefulNodeAzure#preferred_spot_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.preferredZones">PreferredZones</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_zones StatefulNodeAzure#preferred_zones}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.schedulingTask">SchedulingTask</a></code> | <code>object</code> | scheduling_task block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.secret">Secret</a></code> | <code>object</code> | secret block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistVm">ShouldPersistVm</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_vm StatefulNodeAzure#should_persist_vm}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shutdownScript">ShutdownScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#shutdown_script StatefulNodeAzure#shutdown_script}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.signal">Signal</a></code> | <code>object</code> | signal block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.tag">Tag</a></code> | <code>object</code> | tag block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.updateState">UpdateState</a></code> | <code>object</code> | update_state block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.zones">Zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#zones StatefulNodeAzure#zones}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.image"></a>

```csharp
public StatefulNodeAzureImage Image { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a>

image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#image StatefulNodeAzure#image}

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.login"></a>

```csharp
public StatefulNodeAzureLogin Login { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a>

login block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#login StatefulNodeAzure#login}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.network"></a>

```csharp
public StatefulNodeAzureNetwork Network { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a>

network block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network StatefulNodeAzure#network}

---

##### `OdSizes`<sup>Required</sup> <a name="OdSizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.odSizes"></a>

```csharp
public string[] OdSizes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#od_sizes StatefulNodeAzure#od_sizes}.

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.os"></a>

```csharp
public string Os { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#os StatefulNodeAzure#os}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#region StatefulNodeAzure#region}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}.

---

##### `ShouldPersistDataDisks`<sup>Required</sup> <a name="ShouldPersistDataDisks" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistDataDisks"></a>

```csharp
public object ShouldPersistDataDisks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_data_disks StatefulNodeAzure#should_persist_data_disks}.

---

##### `ShouldPersistNetwork`<sup>Required</sup> <a name="ShouldPersistNetwork" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistNetwork"></a>

```csharp
public object ShouldPersistNetwork { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_network StatefulNodeAzure#should_persist_network}.

---

##### `ShouldPersistOsDisk`<sup>Required</sup> <a name="ShouldPersistOsDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistOsDisk"></a>

```csharp
public object ShouldPersistOsDisk { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_os_disk StatefulNodeAzure#should_persist_os_disk}.

---

##### `SpotSizes`<sup>Required</sup> <a name="SpotSizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.spotSizes"></a>

```csharp
public string[] SpotSizes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#spot_sizes StatefulNodeAzure#spot_sizes}.

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.strategy"></a>

```csharp
public StatefulNodeAzureStrategy Strategy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#strategy StatefulNodeAzure#strategy}

---

##### `AttachDataDisk`<sup>Optional</sup> <a name="AttachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.attachDataDisk"></a>

```csharp
public object AttachDataDisk { get; set; }
```

- *Type:* object

attach_data_disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#attach_data_disk StatefulNodeAzure#attach_data_disk}

---

##### `BootDiagnostics`<sup>Optional</sup> <a name="BootDiagnostics" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.bootDiagnostics"></a>

```csharp
public object BootDiagnostics { get; set; }
```

- *Type:* object

boot_diagnostics block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#boot_diagnostics StatefulNodeAzure#boot_diagnostics}

---

##### `CustomData`<sup>Optional</sup> <a name="CustomData" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.customData"></a>

```csharp
public string CustomData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#custom_data StatefulNodeAzure#custom_data}.

---

##### `DataDisk`<sup>Optional</sup> <a name="DataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.dataDisk"></a>

```csharp
public object DataDisk { get; set; }
```

- *Type:* object

data_disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk StatefulNodeAzure#data_disk}

---

##### `DataDisksPersistenceMode`<sup>Optional</sup> <a name="DataDisksPersistenceMode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.dataDisksPersistenceMode"></a>

```csharp
public string DataDisksPersistenceMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disks_persistence_mode StatefulNodeAzure#data_disks_persistence_mode}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.delete"></a>

```csharp
public object Delete { get; set; }
```

- *Type:* object

delete block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#delete StatefulNodeAzure#delete}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#description StatefulNodeAzure#description}.

---

##### `DetachDataDisk`<sup>Optional</sup> <a name="DetachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.detachDataDisk"></a>

```csharp
public object DetachDataDisk { get; set; }
```

- *Type:* object

detach_data_disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#detach_data_disk StatefulNodeAzure#detach_data_disk}

---

##### `Extension`<sup>Optional</sup> <a name="Extension" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.extension"></a>

```csharp
public object Extension { get; set; }
```

- *Type:* object

extension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#extension StatefulNodeAzure#extension}

---

##### `Health`<sup>Optional</sup> <a name="Health" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.health"></a>

```csharp
public StatefulNodeAzureHealth Health { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a>

health block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#health StatefulNodeAzure#health}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#id StatefulNodeAzure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportVm`<sup>Optional</sup> <a name="ImportVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.importVm"></a>

```csharp
public object ImportVm { get; set; }
```

- *Type:* object

import_vm block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#import_vm StatefulNodeAzure#import_vm}

---

##### `LoadBalancer`<sup>Optional</sup> <a name="LoadBalancer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.loadBalancer"></a>

```csharp
public object LoadBalancer { get; set; }
```

- *Type:* object

load_balancer block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#load_balancer StatefulNodeAzure#load_balancer}

---

##### `ManagedServiceIdentities`<sup>Optional</sup> <a name="ManagedServiceIdentities" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.managedServiceIdentities"></a>

```csharp
public object ManagedServiceIdentities { get; set; }
```

- *Type:* object

managed_service_identities block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#managed_service_identities StatefulNodeAzure#managed_service_identities}

---

##### `OsDisk`<sup>Optional</sup> <a name="OsDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.osDisk"></a>

```csharp
public StatefulNodeAzureOsDisk OsDisk { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#os_disk StatefulNodeAzure#os_disk}

---

##### `OsDiskPersistenceMode`<sup>Optional</sup> <a name="OsDiskPersistenceMode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.osDiskPersistenceMode"></a>

```csharp
public string OsDiskPersistenceMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#os_disk_persistence_mode StatefulNodeAzure#os_disk_persistence_mode}.

---

##### `PreferredSpotSizes`<sup>Optional</sup> <a name="PreferredSpotSizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.preferredSpotSizes"></a>

```csharp
public string[] PreferredSpotSizes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_spot_sizes StatefulNodeAzure#preferred_spot_sizes}.

---

##### `PreferredZones`<sup>Optional</sup> <a name="PreferredZones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.preferredZones"></a>

```csharp
public string PreferredZones { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_zones StatefulNodeAzure#preferred_zones}.

---

##### `SchedulingTask`<sup>Optional</sup> <a name="SchedulingTask" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.schedulingTask"></a>

```csharp
public object SchedulingTask { get; set; }
```

- *Type:* object

scheduling_task block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#scheduling_task StatefulNodeAzure#scheduling_task}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.secret"></a>

```csharp
public object Secret { get; set; }
```

- *Type:* object

secret block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#secret StatefulNodeAzure#secret}

---

##### `ShouldPersistVm`<sup>Optional</sup> <a name="ShouldPersistVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistVm"></a>

```csharp
public object ShouldPersistVm { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_persist_vm StatefulNodeAzure#should_persist_vm}.

---

##### `ShutdownScript`<sup>Optional</sup> <a name="ShutdownScript" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shutdownScript"></a>

```csharp
public string ShutdownScript { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#shutdown_script StatefulNodeAzure#shutdown_script}.

---

##### `Signal`<sup>Optional</sup> <a name="Signal" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.signal"></a>

```csharp
public object Signal { get; set; }
```

- *Type:* object

signal block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#signal StatefulNodeAzure#signal}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.tag"></a>

```csharp
public object Tag { get; set; }
```

- *Type:* object

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#tag StatefulNodeAzure#tag}

---

##### `UpdateState`<sup>Optional</sup> <a name="UpdateState" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.updateState"></a>

```csharp
public object UpdateState { get; set; }
```

- *Type:* object

update_state block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#update_state StatefulNodeAzure#update_state}

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.zones"></a>

```csharp
public string[] Zones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#zones StatefulNodeAzure#zones}.

---

### StatefulNodeAzureDataDisk <a name="StatefulNodeAzureDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureDataDisk {
    double Lun,
    double SizeGb,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.property.lun">Lun</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#lun StatefulNodeAzure#lun}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.property.sizeGb">SizeGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}. |

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.property.lun"></a>

```csharp
public double Lun { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#lun StatefulNodeAzure#lun}.

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.property.sizeGb"></a>

```csharp
public double SizeGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}.

---

### StatefulNodeAzureDelete <a name="StatefulNodeAzureDelete" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureDelete {
    object DiskShouldDeallocate,
    object NetworkShouldDeallocate,
    object PublicIpShouldDeallocate,
    object ShouldTerminateVm,
    object SnapshotShouldDeallocate,
    double DiskTtlInHours = null,
    double NetworkTtlInHours = null,
    double PublicIpTtlInHours = null,
    double SnapshotTtlInHours = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.diskShouldDeallocate">DiskShouldDeallocate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#disk_should_deallocate StatefulNodeAzure#disk_should_deallocate}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.networkShouldDeallocate">NetworkShouldDeallocate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_should_deallocate StatefulNodeAzure#network_should_deallocate}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.publicIpShouldDeallocate">PublicIpShouldDeallocate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ip_should_deallocate StatefulNodeAzure#public_ip_should_deallocate}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.shouldTerminateVm">ShouldTerminateVm</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_terminate_vm StatefulNodeAzure#should_terminate_vm}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.snapshotShouldDeallocate">SnapshotShouldDeallocate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#snapshot_should_deallocate StatefulNodeAzure#snapshot_should_deallocate}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.diskTtlInHours">DiskTtlInHours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#disk_ttl_in_hours StatefulNodeAzure#disk_ttl_in_hours}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.networkTtlInHours">NetworkTtlInHours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_ttl_in_hours StatefulNodeAzure#network_ttl_in_hours}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.publicIpTtlInHours">PublicIpTtlInHours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ip_ttl_in_hours StatefulNodeAzure#public_ip_ttl_in_hours}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.snapshotTtlInHours">SnapshotTtlInHours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#snapshot_ttl_in_hours StatefulNodeAzure#snapshot_ttl_in_hours}. |

---

##### `DiskShouldDeallocate`<sup>Required</sup> <a name="DiskShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.diskShouldDeallocate"></a>

```csharp
public object DiskShouldDeallocate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#disk_should_deallocate StatefulNodeAzure#disk_should_deallocate}.

---

##### `NetworkShouldDeallocate`<sup>Required</sup> <a name="NetworkShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.networkShouldDeallocate"></a>

```csharp
public object NetworkShouldDeallocate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_should_deallocate StatefulNodeAzure#network_should_deallocate}.

---

##### `PublicIpShouldDeallocate`<sup>Required</sup> <a name="PublicIpShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.publicIpShouldDeallocate"></a>

```csharp
public object PublicIpShouldDeallocate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ip_should_deallocate StatefulNodeAzure#public_ip_should_deallocate}.

---

##### `ShouldTerminateVm`<sup>Required</sup> <a name="ShouldTerminateVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.shouldTerminateVm"></a>

```csharp
public object ShouldTerminateVm { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_terminate_vm StatefulNodeAzure#should_terminate_vm}.

---

##### `SnapshotShouldDeallocate`<sup>Required</sup> <a name="SnapshotShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.snapshotShouldDeallocate"></a>

```csharp
public object SnapshotShouldDeallocate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#snapshot_should_deallocate StatefulNodeAzure#snapshot_should_deallocate}.

---

##### `DiskTtlInHours`<sup>Optional</sup> <a name="DiskTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.diskTtlInHours"></a>

```csharp
public double DiskTtlInHours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#disk_ttl_in_hours StatefulNodeAzure#disk_ttl_in_hours}.

---

##### `NetworkTtlInHours`<sup>Optional</sup> <a name="NetworkTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.networkTtlInHours"></a>

```csharp
public double NetworkTtlInHours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_ttl_in_hours StatefulNodeAzure#network_ttl_in_hours}.

---

##### `PublicIpTtlInHours`<sup>Optional</sup> <a name="PublicIpTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.publicIpTtlInHours"></a>

```csharp
public double PublicIpTtlInHours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ip_ttl_in_hours StatefulNodeAzure#public_ip_ttl_in_hours}.

---

##### `SnapshotTtlInHours`<sup>Optional</sup> <a name="SnapshotTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.snapshotTtlInHours"></a>

```csharp
public double SnapshotTtlInHours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#snapshot_ttl_in_hours StatefulNodeAzure#snapshot_ttl_in_hours}.

---

### StatefulNodeAzureDetachDataDisk <a name="StatefulNodeAzureDetachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureDetachDataDisk {
    string DataDiskName,
    string DataDiskResourceGroupName,
    object ShouldDeallocate,
    double TtlInHours = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.dataDiskName">DataDiskName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_name StatefulNodeAzure#data_disk_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.dataDiskResourceGroupName">DataDiskResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_resource_group_name StatefulNodeAzure#data_disk_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.shouldDeallocate">ShouldDeallocate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_deallocate StatefulNodeAzure#should_deallocate}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.ttlInHours">TtlInHours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#ttl_in_hours StatefulNodeAzure#ttl_in_hours}. |

---

##### `DataDiskName`<sup>Required</sup> <a name="DataDiskName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.dataDiskName"></a>

```csharp
public string DataDiskName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_name StatefulNodeAzure#data_disk_name}.

---

##### `DataDiskResourceGroupName`<sup>Required</sup> <a name="DataDiskResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.dataDiskResourceGroupName"></a>

```csharp
public string DataDiskResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#data_disk_resource_group_name StatefulNodeAzure#data_disk_resource_group_name}.

---

##### `ShouldDeallocate`<sup>Required</sup> <a name="ShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.shouldDeallocate"></a>

```csharp
public object ShouldDeallocate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#should_deallocate StatefulNodeAzure#should_deallocate}.

---

##### `TtlInHours`<sup>Optional</sup> <a name="TtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.ttlInHours"></a>

```csharp
public double TtlInHours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#ttl_in_hours StatefulNodeAzure#ttl_in_hours}.

---

### StatefulNodeAzureExtension <a name="StatefulNodeAzureExtension" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureExtension {
    string ApiVersion,
    object MinorVersionAutoUpgrade,
    string Name,
    string Publisher,
    string Type,
    System.Collections.Generic.IDictionary<string, string> ProtectedSettings = null,
    System.Collections.Generic.IDictionary<string, string> PublicSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.apiVersion">ApiVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#api_version StatefulNodeAzure#api_version}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.minorVersionAutoUpgrade">MinorVersionAutoUpgrade</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#minor_version_auto_upgrade StatefulNodeAzure#minor_version_auto_upgrade}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.publisher">Publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#publisher StatefulNodeAzure#publisher}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.protectedSettings">ProtectedSettings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#protected_settings StatefulNodeAzure#protected_settings}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.publicSettings">PublicSettings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_settings StatefulNodeAzure#public_settings}. |

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.apiVersion"></a>

```csharp
public string ApiVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#api_version StatefulNodeAzure#api_version}.

---

##### `MinorVersionAutoUpgrade`<sup>Required</sup> <a name="MinorVersionAutoUpgrade" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.minorVersionAutoUpgrade"></a>

```csharp
public object MinorVersionAutoUpgrade { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#minor_version_auto_upgrade StatefulNodeAzure#minor_version_auto_upgrade}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.publisher"></a>

```csharp
public string Publisher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#publisher StatefulNodeAzure#publisher}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}.

---

##### `ProtectedSettings`<sup>Optional</sup> <a name="ProtectedSettings" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.protectedSettings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ProtectedSettings { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#protected_settings StatefulNodeAzure#protected_settings}.

---

##### `PublicSettings`<sup>Optional</sup> <a name="PublicSettings" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.publicSettings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PublicSettings { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_settings StatefulNodeAzure#public_settings}.

---

### StatefulNodeAzureHealth <a name="StatefulNodeAzureHealth" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureHealth {
    object AutoHealing,
    string[] HealthCheckTypes,
    double GracePeriod = null,
    double UnhealthyDuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.autoHealing">AutoHealing</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#auto_healing StatefulNodeAzure#auto_healing}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.healthCheckTypes">HealthCheckTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#health_check_types StatefulNodeAzure#health_check_types}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.gracePeriod">GracePeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#grace_period StatefulNodeAzure#grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.unhealthyDuration">UnhealthyDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#unhealthy_duration StatefulNodeAzure#unhealthy_duration}. |

---

##### `AutoHealing`<sup>Required</sup> <a name="AutoHealing" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.autoHealing"></a>

```csharp
public object AutoHealing { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#auto_healing StatefulNodeAzure#auto_healing}.

---

##### `HealthCheckTypes`<sup>Required</sup> <a name="HealthCheckTypes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.healthCheckTypes"></a>

```csharp
public string[] HealthCheckTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#health_check_types StatefulNodeAzure#health_check_types}.

---

##### `GracePeriod`<sup>Optional</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.gracePeriod"></a>

```csharp
public double GracePeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#grace_period StatefulNodeAzure#grace_period}.

---

##### `UnhealthyDuration`<sup>Optional</sup> <a name="UnhealthyDuration" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.unhealthyDuration"></a>

```csharp
public double UnhealthyDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#unhealthy_duration StatefulNodeAzure#unhealthy_duration}.

---

### StatefulNodeAzureImage <a name="StatefulNodeAzureImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureImage {
    object CustomImage = null,
    object Gallery = null,
    object MarketplaceImage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.property.customImage">CustomImage</a></code> | <code>object</code> | custom_image block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.property.gallery">Gallery</a></code> | <code>object</code> | gallery block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.property.marketplaceImage">MarketplaceImage</a></code> | <code>object</code> | marketplace_image block. |

---

##### `CustomImage`<sup>Optional</sup> <a name="CustomImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.property.customImage"></a>

```csharp
public object CustomImage { get; set; }
```

- *Type:* object

custom_image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#custom_image StatefulNodeAzure#custom_image}

---

##### `Gallery`<sup>Optional</sup> <a name="Gallery" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.property.gallery"></a>

```csharp
public object Gallery { get; set; }
```

- *Type:* object

gallery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#gallery StatefulNodeAzure#gallery}

---

##### `MarketplaceImage`<sup>Optional</sup> <a name="MarketplaceImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.property.marketplaceImage"></a>

```csharp
public object MarketplaceImage { get; set; }
```

- *Type:* object

marketplace_image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#marketplace_image StatefulNodeAzure#marketplace_image}

---

### StatefulNodeAzureImageCustomImage <a name="StatefulNodeAzureImageCustomImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureImageCustomImage {
    string CustomImageResourceGroupName,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage.property.customImageResourceGroupName">CustomImageResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#custom_image_resource_group_name StatefulNodeAzure#custom_image_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |

---

##### `CustomImageResourceGroupName`<sup>Required</sup> <a name="CustomImageResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage.property.customImageResourceGroupName"></a>

```csharp
public string CustomImageResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#custom_image_resource_group_name StatefulNodeAzure#custom_image_resource_group_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

### StatefulNodeAzureImageGallery <a name="StatefulNodeAzureImageGallery" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureImageGallery {
    string GalleryName,
    string GalleryResourceGroupName,
    string ImageName,
    string VersionName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.galleryName">GalleryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#gallery_name StatefulNodeAzure#gallery_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.galleryResourceGroupName">GalleryResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#gallery_resource_group_name StatefulNodeAzure#gallery_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.imageName">ImageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#image_name StatefulNodeAzure#image_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.versionName">VersionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#version_name StatefulNodeAzure#version_name}. |

---

##### `GalleryName`<sup>Required</sup> <a name="GalleryName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.galleryName"></a>

```csharp
public string GalleryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#gallery_name StatefulNodeAzure#gallery_name}.

---

##### `GalleryResourceGroupName`<sup>Required</sup> <a name="GalleryResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.galleryResourceGroupName"></a>

```csharp
public string GalleryResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#gallery_resource_group_name StatefulNodeAzure#gallery_resource_group_name}.

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#image_name StatefulNodeAzure#image_name}.

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.versionName"></a>

```csharp
public string VersionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#version_name StatefulNodeAzure#version_name}.

---

### StatefulNodeAzureImageMarketplaceImage <a name="StatefulNodeAzureImageMarketplaceImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureImageMarketplaceImage {
    string Offer,
    string Publisher,
    string Sku,
    string Version
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.offer">Offer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#offer StatefulNodeAzure#offer}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.publisher">Publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#publisher StatefulNodeAzure#publisher}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#sku StatefulNodeAzure#sku}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#version StatefulNodeAzure#version}. |

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.offer"></a>

```csharp
public string Offer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#offer StatefulNodeAzure#offer}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.publisher"></a>

```csharp
public string Publisher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#publisher StatefulNodeAzure#publisher}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#sku StatefulNodeAzure#sku}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#version StatefulNodeAzure#version}.

---

### StatefulNodeAzureImportVm <a name="StatefulNodeAzureImportVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureImportVm {
    string OriginalVmName,
    string ResourceGroupName,
    double DrainingTimeout = null,
    double ResourcesRetentionTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.originalVmName">OriginalVmName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#original_vm_name StatefulNodeAzure#original_vm_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.drainingTimeout">DrainingTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#draining_timeout StatefulNodeAzure#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.resourcesRetentionTime">ResourcesRetentionTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resources_retention_time StatefulNodeAzure#resources_retention_time}. |

---

##### `OriginalVmName`<sup>Required</sup> <a name="OriginalVmName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.originalVmName"></a>

```csharp
public string OriginalVmName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#original_vm_name StatefulNodeAzure#original_vm_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}.

---

##### `DrainingTimeout`<sup>Optional</sup> <a name="DrainingTimeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.drainingTimeout"></a>

```csharp
public double DrainingTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#draining_timeout StatefulNodeAzure#draining_timeout}.

---

##### `ResourcesRetentionTime`<sup>Optional</sup> <a name="ResourcesRetentionTime" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.resourcesRetentionTime"></a>

```csharp
public double ResourcesRetentionTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resources_retention_time StatefulNodeAzure#resources_retention_time}.

---

### StatefulNodeAzureLoadBalancer <a name="StatefulNodeAzureLoadBalancer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureLoadBalancer {
    string[] BackendPoolNames,
    string Name,
    string ResourceGroupName,
    string Type,
    string Sku = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.backendPoolNames">BackendPoolNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#backend_pool_names StatefulNodeAzure#backend_pool_names}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#sku StatefulNodeAzure#sku}. |

---

##### `BackendPoolNames`<sup>Required</sup> <a name="BackendPoolNames" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.backendPoolNames"></a>

```csharp
public string[] BackendPoolNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#backend_pool_names StatefulNodeAzure#backend_pool_names}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}.

---

##### `Sku`<sup>Optional</sup> <a name="Sku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#sku StatefulNodeAzure#sku}.

---

### StatefulNodeAzureLogin <a name="StatefulNodeAzureLogin" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureLogin {
    string UserName,
    string Password = null,
    string SshPublicKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#user_name StatefulNodeAzure#user_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#password StatefulNodeAzure#password}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.property.sshPublicKey">SshPublicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#ssh_public_key StatefulNodeAzure#ssh_public_key}. |

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#user_name StatefulNodeAzure#user_name}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#password StatefulNodeAzure#password}.

---

##### `SshPublicKey`<sup>Optional</sup> <a name="SshPublicKey" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.property.sshPublicKey"></a>

```csharp
public string SshPublicKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#ssh_public_key StatefulNodeAzure#ssh_public_key}.

---

### StatefulNodeAzureManagedServiceIdentities <a name="StatefulNodeAzureManagedServiceIdentities" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureManagedServiceIdentities {
    string Name,
    string ResourceGroupName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}.

---

### StatefulNodeAzureNetwork <a name="StatefulNodeAzureNetwork" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureNetwork {
    object NetworkInterface,
    string NetworkResourceGroupName,
    string VirtualNetworkName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.property.networkInterface">NetworkInterface</a></code> | <code>object</code> | network_interface block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.property.networkResourceGroupName">NetworkResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.property.virtualNetworkName">VirtualNetworkName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#virtual_network_name StatefulNodeAzure#virtual_network_name}. |

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.property.networkInterface"></a>

```csharp
public object NetworkInterface { get; set; }
```

- *Type:* object

network_interface block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_interface StatefulNodeAzure#network_interface}

---

##### `NetworkResourceGroupName`<sup>Required</sup> <a name="NetworkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.property.networkResourceGroupName"></a>

```csharp
public string NetworkResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}.

---

##### `VirtualNetworkName`<sup>Required</sup> <a name="VirtualNetworkName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.property.virtualNetworkName"></a>

```csharp
public string VirtualNetworkName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#virtual_network_name StatefulNodeAzure#virtual_network_name}.

---

### StatefulNodeAzureNetworkNetworkInterface <a name="StatefulNodeAzureNetworkNetworkInterface" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureNetworkNetworkInterface {
    object IsPrimary,
    string SubnetName,
    object AdditionalIpConfigurations = null,
    object ApplicationSecurityGroups = null,
    object AssignPublicIp = null,
    object EnableIpForwarding = null,
    object NetworkSecurityGroup = null,
    string[] PrivateIpAddresses = null,
    object PublicIps = null,
    string PublicIpSku = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.isPrimary">IsPrimary</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#is_primary StatefulNodeAzure#is_primary}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.subnetName">SubnetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#subnet_name StatefulNodeAzure#subnet_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.additionalIpConfigurations">AdditionalIpConfigurations</a></code> | <code>object</code> | additional_ip_configurations block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.applicationSecurityGroups">ApplicationSecurityGroups</a></code> | <code>object</code> | application_security_groups block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.assignPublicIp">AssignPublicIp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#assign_public_ip StatefulNodeAzure#assign_public_ip}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.enableIpForwarding">EnableIpForwarding</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#enable_ip_forwarding StatefulNodeAzure#enable_ip_forwarding}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.networkSecurityGroup">NetworkSecurityGroup</a></code> | <code>object</code> | network_security_group block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.privateIpAddresses">PrivateIpAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#private_ip_addresses StatefulNodeAzure#private_ip_addresses}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.publicIps">PublicIps</a></code> | <code>object</code> | public_ips block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.publicIpSku">PublicIpSku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ip_sku StatefulNodeAzure#public_ip_sku}. |

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.isPrimary"></a>

```csharp
public object IsPrimary { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#is_primary StatefulNodeAzure#is_primary}.

---

##### `SubnetName`<sup>Required</sup> <a name="SubnetName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.subnetName"></a>

```csharp
public string SubnetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#subnet_name StatefulNodeAzure#subnet_name}.

---

##### `AdditionalIpConfigurations`<sup>Optional</sup> <a name="AdditionalIpConfigurations" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.additionalIpConfigurations"></a>

```csharp
public object AdditionalIpConfigurations { get; set; }
```

- *Type:* object

additional_ip_configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#additional_ip_configurations StatefulNodeAzure#additional_ip_configurations}

---

##### `ApplicationSecurityGroups`<sup>Optional</sup> <a name="ApplicationSecurityGroups" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.applicationSecurityGroups"></a>

```csharp
public object ApplicationSecurityGroups { get; set; }
```

- *Type:* object

application_security_groups block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#application_security_groups StatefulNodeAzure#application_security_groups}

---

##### `AssignPublicIp`<sup>Optional</sup> <a name="AssignPublicIp" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.assignPublicIp"></a>

```csharp
public object AssignPublicIp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#assign_public_ip StatefulNodeAzure#assign_public_ip}.

---

##### `EnableIpForwarding`<sup>Optional</sup> <a name="EnableIpForwarding" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.enableIpForwarding"></a>

```csharp
public object EnableIpForwarding { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#enable_ip_forwarding StatefulNodeAzure#enable_ip_forwarding}.

---

##### `NetworkSecurityGroup`<sup>Optional</sup> <a name="NetworkSecurityGroup" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.networkSecurityGroup"></a>

```csharp
public object NetworkSecurityGroup { get; set; }
```

- *Type:* object

network_security_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_security_group StatefulNodeAzure#network_security_group}

---

##### `PrivateIpAddresses`<sup>Optional</sup> <a name="PrivateIpAddresses" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.privateIpAddresses"></a>

```csharp
public string[] PrivateIpAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#private_ip_addresses StatefulNodeAzure#private_ip_addresses}.

---

##### `PublicIps`<sup>Optional</sup> <a name="PublicIps" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.publicIps"></a>

```csharp
public object PublicIps { get; set; }
```

- *Type:* object

public_ips block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ips StatefulNodeAzure#public_ips}

---

##### `PublicIpSku`<sup>Optional</sup> <a name="PublicIpSku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.publicIpSku"></a>

```csharp
public string PublicIpSku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#public_ip_sku StatefulNodeAzure#public_ip_sku}.

---

### StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations <a name="StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations {
    string Name,
    string PrivateIpAddressVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations.property.privateIpAddressVersion">PrivateIpAddressVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#private_ip_address_version StatefulNodeAzure#private_ip_address_version}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `PrivateIpAddressVersion`<sup>Required</sup> <a name="PrivateIpAddressVersion" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations.property.privateIpAddressVersion"></a>

```csharp
public string PrivateIpAddressVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#private_ip_address_version StatefulNodeAzure#private_ip_address_version}.

---

### StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups <a name="StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups {
    string Name,
    string NetworkResourceGroupName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups.property.networkResourceGroupName">NetworkResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `NetworkResourceGroupName`<sup>Required</sup> <a name="NetworkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups.property.networkResourceGroupName"></a>

```csharp
public string NetworkResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}.

---

### StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup <a name="StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup {
    string Name = null,
    string NetworkResourceGroupName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup.property.networkResourceGroupName">NetworkResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `NetworkResourceGroupName`<sup>Optional</sup> <a name="NetworkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup.property.networkResourceGroupName"></a>

```csharp
public string NetworkResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}.

---

### StatefulNodeAzureNetworkNetworkInterfacePublicIps <a name="StatefulNodeAzureNetworkNetworkInterfacePublicIps" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureNetworkNetworkInterfacePublicIps {
    string Name,
    string NetworkResourceGroupName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps.property.networkResourceGroupName">NetworkResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `NetworkResourceGroupName`<sup>Required</sup> <a name="NetworkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps.property.networkResourceGroupName"></a>

```csharp
public string NetworkResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}.

---

### StatefulNodeAzureOsDisk <a name="StatefulNodeAzureOsDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureOsDisk {
    string Type,
    double SizeGb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk.property.sizeGb">SizeGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}.

---

##### `SizeGb`<sup>Optional</sup> <a name="SizeGb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk.property.sizeGb"></a>

```csharp
public double SizeGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}.

---

### StatefulNodeAzureSchedulingTask <a name="StatefulNodeAzureSchedulingTask" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureSchedulingTask {
    string CronExpression,
    object IsEnabled,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.property.cronExpression">CronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#cron_expression StatefulNodeAzure#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#is_enabled StatefulNodeAzure#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}. |

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.property.cronExpression"></a>

```csharp
public string CronExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#cron_expression StatefulNodeAzure#cron_expression}.

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#is_enabled StatefulNodeAzure#is_enabled}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}.

---

### StatefulNodeAzureSecret <a name="StatefulNodeAzureSecret" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureSecret {
    object SourceVault,
    object VaultCertificates
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret.property.sourceVault">SourceVault</a></code> | <code>object</code> | source_vault block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret.property.vaultCertificates">VaultCertificates</a></code> | <code>object</code> | vault_certificates block. |

---

##### `SourceVault`<sup>Required</sup> <a name="SourceVault" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret.property.sourceVault"></a>

```csharp
public object SourceVault { get; set; }
```

- *Type:* object

source_vault block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#source_vault StatefulNodeAzure#source_vault}

---

##### `VaultCertificates`<sup>Required</sup> <a name="VaultCertificates" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret.property.vaultCertificates"></a>

```csharp
public object VaultCertificates { get; set; }
```

- *Type:* object

vault_certificates block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#vault_certificates StatefulNodeAzure#vault_certificates}

---

### StatefulNodeAzureSecretSourceVault <a name="StatefulNodeAzureSecretSourceVault" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureSecretSourceVault {
    string Name,
    string ResourceGroupName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}.

---

### StatefulNodeAzureSecretVaultCertificates <a name="StatefulNodeAzureSecretVaultCertificates" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureSecretVaultCertificates {
    string CertificateStore = null,
    string CertificateUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates.property.certificateStore">CertificateStore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#certificate_store StatefulNodeAzure#certificate_store}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates.property.certificateUrl">CertificateUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#certificate_url StatefulNodeAzure#certificate_url}. |

---

##### `CertificateStore`<sup>Optional</sup> <a name="CertificateStore" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates.property.certificateStore"></a>

```csharp
public string CertificateStore { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#certificate_store StatefulNodeAzure#certificate_store}.

---

##### `CertificateUrl`<sup>Optional</sup> <a name="CertificateUrl" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates.property.certificateUrl"></a>

```csharp
public string CertificateUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#certificate_url StatefulNodeAzure#certificate_url}.

---

### StatefulNodeAzureSignal <a name="StatefulNodeAzureSignal" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureSignal {
    double Timeout,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal.property.timeout">Timeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#timeout StatefulNodeAzure#timeout}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}. |

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#timeout StatefulNodeAzure#timeout}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#type StatefulNodeAzure#type}.

---

### StatefulNodeAzureStrategy <a name="StatefulNodeAzureStrategy" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureStrategy {
    object FallbackToOnDemand,
    double DrainingTimeout = null,
    string[] OptimizationWindows = null,
    string PreferredLifeCycle = null,
    StatefulNodeAzureStrategyRevertToSpot RevertToSpot = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.fallbackToOnDemand">FallbackToOnDemand</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#fallback_to_on_demand StatefulNodeAzure#fallback_to_on_demand}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.drainingTimeout">DrainingTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#draining_timeout StatefulNodeAzure#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.optimizationWindows">OptimizationWindows</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#optimization_windows StatefulNodeAzure#optimization_windows}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.preferredLifeCycle">PreferredLifeCycle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_life_cycle StatefulNodeAzure#preferred_life_cycle}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.revertToSpot">RevertToSpot</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a></code> | revert_to_spot block. |

---

##### `FallbackToOnDemand`<sup>Required</sup> <a name="FallbackToOnDemand" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.fallbackToOnDemand"></a>

```csharp
public object FallbackToOnDemand { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#fallback_to_on_demand StatefulNodeAzure#fallback_to_on_demand}.

---

##### `DrainingTimeout`<sup>Optional</sup> <a name="DrainingTimeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.drainingTimeout"></a>

```csharp
public double DrainingTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#draining_timeout StatefulNodeAzure#draining_timeout}.

---

##### `OptimizationWindows`<sup>Optional</sup> <a name="OptimizationWindows" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.optimizationWindows"></a>

```csharp
public string[] OptimizationWindows { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#optimization_windows StatefulNodeAzure#optimization_windows}.

---

##### `PreferredLifeCycle`<sup>Optional</sup> <a name="PreferredLifeCycle" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.preferredLifeCycle"></a>

```csharp
public string PreferredLifeCycle { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#preferred_life_cycle StatefulNodeAzure#preferred_life_cycle}.

---

##### `RevertToSpot`<sup>Optional</sup> <a name="RevertToSpot" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.revertToSpot"></a>

```csharp
public StatefulNodeAzureStrategyRevertToSpot RevertToSpot { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a>

revert_to_spot block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#revert_to_spot StatefulNodeAzure#revert_to_spot}

---

### StatefulNodeAzureStrategyRevertToSpot <a name="StatefulNodeAzureStrategyRevertToSpot" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureStrategyRevertToSpot {
    string PerformAt
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot.property.performAt">PerformAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#perform_at StatefulNodeAzure#perform_at}. |

---

##### `PerformAt`<sup>Required</sup> <a name="PerformAt" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot.property.performAt"></a>

```csharp
public string PerformAt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#perform_at StatefulNodeAzure#perform_at}.

---

### StatefulNodeAzureTag <a name="StatefulNodeAzureTag" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureTag {
    string TagKey,
    string TagValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag.property.tagKey">TagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#tag_key StatefulNodeAzure#tag_key}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag.property.tagValue">TagValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#tag_value StatefulNodeAzure#tag_value}. |

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag.property.tagKey"></a>

```csharp
public string TagKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#tag_key StatefulNodeAzure#tag_key}.

---

##### `TagValue`<sup>Optional</sup> <a name="TagValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag.property.tagValue"></a>

```csharp
public string TagValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#tag_value StatefulNodeAzure#tag_value}.

---

### StatefulNodeAzureUpdateState <a name="StatefulNodeAzureUpdateState" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureUpdateState {
    string State
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#state StatefulNodeAzure#state}. |

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/stateful_node_azure#state StatefulNodeAzure#state}.

---

## Classes <a name="Classes" id="Classes"></a>

### StatefulNodeAzureAttachDataDiskList <a name="StatefulNodeAzureAttachDataDiskList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureAttachDataDiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.get"></a>

```csharp
private StatefulNodeAzureAttachDataDiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureAttachDataDiskOutputReference <a name="StatefulNodeAzureAttachDataDiskOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureAttachDataDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resetLun">ResetLun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLun` <a name="ResetLun" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resetLun"></a>

```csharp
private void ResetLun()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resetZone"></a>

```csharp
private void ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskNameInput">DataDiskNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskResourceGroupNameInput">DataDiskResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.lunInput">LunInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.sizeGbInput">SizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.storageAccountTypeInput">StorageAccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskName">DataDiskName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskResourceGroupName">DataDiskResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.lun">Lun</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.sizeGb">SizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataDiskNameInput`<sup>Optional</sup> <a name="DataDiskNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskNameInput"></a>

```csharp
public string DataDiskNameInput { get; }
```

- *Type:* string

---

##### `DataDiskResourceGroupNameInput`<sup>Optional</sup> <a name="DataDiskResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskResourceGroupNameInput"></a>

```csharp
public string DataDiskResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `LunInput`<sup>Optional</sup> <a name="LunInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.lunInput"></a>

```csharp
public double LunInput { get; }
```

- *Type:* double

---

##### `SizeGbInput`<sup>Optional</sup> <a name="SizeGbInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.sizeGbInput"></a>

```csharp
public double SizeGbInput { get; }
```

- *Type:* double

---

##### `StorageAccountTypeInput`<sup>Optional</sup> <a name="StorageAccountTypeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.storageAccountTypeInput"></a>

```csharp
public string StorageAccountTypeInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `DataDiskName`<sup>Required</sup> <a name="DataDiskName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskName"></a>

```csharp
public string DataDiskName { get; }
```

- *Type:* string

---

##### `DataDiskResourceGroupName`<sup>Required</sup> <a name="DataDiskResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskResourceGroupName"></a>

```csharp
public string DataDiskResourceGroupName { get; }
```

- *Type:* string

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.lun"></a>

```csharp
public double Lun { get; }
```

- *Type:* double

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.sizeGb"></a>

```csharp
public double SizeGb { get; }
```

- *Type:* double

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureBootDiagnosticsList <a name="StatefulNodeAzureBootDiagnosticsList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureBootDiagnosticsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.get"></a>

```csharp
private StatefulNodeAzureBootDiagnosticsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureBootDiagnosticsOutputReference <a name="StatefulNodeAzureBootDiagnosticsOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureBootDiagnosticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resetStorageUrl">ResetStorageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetStorageUrl` <a name="ResetStorageUrl" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resetStorageUrl"></a>

```csharp
private void ResetStorageUrl()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.storageUrlInput">StorageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.storageUrl">StorageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `StorageUrlInput`<sup>Optional</sup> <a name="StorageUrlInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.storageUrlInput"></a>

```csharp
public string StorageUrlInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `StorageUrl`<sup>Required</sup> <a name="StorageUrl" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.storageUrl"></a>

```csharp
public string StorageUrl { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureDataDiskList <a name="StatefulNodeAzureDataDiskList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureDataDiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.get"></a>

```csharp
private StatefulNodeAzureDataDiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureDataDiskOutputReference <a name="StatefulNodeAzureDataDiskOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureDataDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.lunInput">LunInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.sizeGbInput">SizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.lun">Lun</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.sizeGb">SizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LunInput`<sup>Optional</sup> <a name="LunInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.lunInput"></a>

```csharp
public double LunInput { get; }
```

- *Type:* double

---

##### `SizeGbInput`<sup>Optional</sup> <a name="SizeGbInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.sizeGbInput"></a>

```csharp
public double SizeGbInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.lun"></a>

```csharp
public double Lun { get; }
```

- *Type:* double

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.sizeGb"></a>

```csharp
public double SizeGb { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureDeleteList <a name="StatefulNodeAzureDeleteList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureDeleteList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.get"></a>

```csharp
private StatefulNodeAzureDeleteOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureDeleteOutputReference <a name="StatefulNodeAzureDeleteOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureDeleteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetDiskTtlInHours">ResetDiskTtlInHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetNetworkTtlInHours">ResetNetworkTtlInHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetPublicIpTtlInHours">ResetPublicIpTtlInHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetSnapshotTtlInHours">ResetSnapshotTtlInHours</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskTtlInHours` <a name="ResetDiskTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetDiskTtlInHours"></a>

```csharp
private void ResetDiskTtlInHours()
```

##### `ResetNetworkTtlInHours` <a name="ResetNetworkTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetNetworkTtlInHours"></a>

```csharp
private void ResetNetworkTtlInHours()
```

##### `ResetPublicIpTtlInHours` <a name="ResetPublicIpTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetPublicIpTtlInHours"></a>

```csharp
private void ResetPublicIpTtlInHours()
```

##### `ResetSnapshotTtlInHours` <a name="ResetSnapshotTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetSnapshotTtlInHours"></a>

```csharp
private void ResetSnapshotTtlInHours()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskShouldDeallocateInput">DiskShouldDeallocateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskTtlInHoursInput">DiskTtlInHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkShouldDeallocateInput">NetworkShouldDeallocateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkTtlInHoursInput">NetworkTtlInHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpShouldDeallocateInput">PublicIpShouldDeallocateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpTtlInHoursInput">PublicIpTtlInHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.shouldTerminateVmInput">ShouldTerminateVmInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotShouldDeallocateInput">SnapshotShouldDeallocateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotTtlInHoursInput">SnapshotTtlInHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskShouldDeallocate">DiskShouldDeallocate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskTtlInHours">DiskTtlInHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkShouldDeallocate">NetworkShouldDeallocate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkTtlInHours">NetworkTtlInHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpShouldDeallocate">PublicIpShouldDeallocate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpTtlInHours">PublicIpTtlInHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.shouldTerminateVm">ShouldTerminateVm</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotShouldDeallocate">SnapshotShouldDeallocate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotTtlInHours">SnapshotTtlInHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskShouldDeallocateInput`<sup>Optional</sup> <a name="DiskShouldDeallocateInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskShouldDeallocateInput"></a>

```csharp
public object DiskShouldDeallocateInput { get; }
```

- *Type:* object

---

##### `DiskTtlInHoursInput`<sup>Optional</sup> <a name="DiskTtlInHoursInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskTtlInHoursInput"></a>

```csharp
public double DiskTtlInHoursInput { get; }
```

- *Type:* double

---

##### `NetworkShouldDeallocateInput`<sup>Optional</sup> <a name="NetworkShouldDeallocateInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkShouldDeallocateInput"></a>

```csharp
public object NetworkShouldDeallocateInput { get; }
```

- *Type:* object

---

##### `NetworkTtlInHoursInput`<sup>Optional</sup> <a name="NetworkTtlInHoursInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkTtlInHoursInput"></a>

```csharp
public double NetworkTtlInHoursInput { get; }
```

- *Type:* double

---

##### `PublicIpShouldDeallocateInput`<sup>Optional</sup> <a name="PublicIpShouldDeallocateInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpShouldDeallocateInput"></a>

```csharp
public object PublicIpShouldDeallocateInput { get; }
```

- *Type:* object

---

##### `PublicIpTtlInHoursInput`<sup>Optional</sup> <a name="PublicIpTtlInHoursInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpTtlInHoursInput"></a>

```csharp
public double PublicIpTtlInHoursInput { get; }
```

- *Type:* double

---

##### `ShouldTerminateVmInput`<sup>Optional</sup> <a name="ShouldTerminateVmInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.shouldTerminateVmInput"></a>

```csharp
public object ShouldTerminateVmInput { get; }
```

- *Type:* object

---

##### `SnapshotShouldDeallocateInput`<sup>Optional</sup> <a name="SnapshotShouldDeallocateInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotShouldDeallocateInput"></a>

```csharp
public object SnapshotShouldDeallocateInput { get; }
```

- *Type:* object

---

##### `SnapshotTtlInHoursInput`<sup>Optional</sup> <a name="SnapshotTtlInHoursInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotTtlInHoursInput"></a>

```csharp
public double SnapshotTtlInHoursInput { get; }
```

- *Type:* double

---

##### `DiskShouldDeallocate`<sup>Required</sup> <a name="DiskShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskShouldDeallocate"></a>

```csharp
public object DiskShouldDeallocate { get; }
```

- *Type:* object

---

##### `DiskTtlInHours`<sup>Required</sup> <a name="DiskTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskTtlInHours"></a>

```csharp
public double DiskTtlInHours { get; }
```

- *Type:* double

---

##### `NetworkShouldDeallocate`<sup>Required</sup> <a name="NetworkShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkShouldDeallocate"></a>

```csharp
public object NetworkShouldDeallocate { get; }
```

- *Type:* object

---

##### `NetworkTtlInHours`<sup>Required</sup> <a name="NetworkTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkTtlInHours"></a>

```csharp
public double NetworkTtlInHours { get; }
```

- *Type:* double

---

##### `PublicIpShouldDeallocate`<sup>Required</sup> <a name="PublicIpShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpShouldDeallocate"></a>

```csharp
public object PublicIpShouldDeallocate { get; }
```

- *Type:* object

---

##### `PublicIpTtlInHours`<sup>Required</sup> <a name="PublicIpTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpTtlInHours"></a>

```csharp
public double PublicIpTtlInHours { get; }
```

- *Type:* double

---

##### `ShouldTerminateVm`<sup>Required</sup> <a name="ShouldTerminateVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.shouldTerminateVm"></a>

```csharp
public object ShouldTerminateVm { get; }
```

- *Type:* object

---

##### `SnapshotShouldDeallocate`<sup>Required</sup> <a name="SnapshotShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotShouldDeallocate"></a>

```csharp
public object SnapshotShouldDeallocate { get; }
```

- *Type:* object

---

##### `SnapshotTtlInHours`<sup>Required</sup> <a name="SnapshotTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotTtlInHours"></a>

```csharp
public double SnapshotTtlInHours { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureDetachDataDiskList <a name="StatefulNodeAzureDetachDataDiskList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureDetachDataDiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.get"></a>

```csharp
private StatefulNodeAzureDetachDataDiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureDetachDataDiskOutputReference <a name="StatefulNodeAzureDetachDataDiskOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureDetachDataDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.resetTtlInHours">ResetTtlInHours</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTtlInHours` <a name="ResetTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.resetTtlInHours"></a>

```csharp
private void ResetTtlInHours()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskNameInput">DataDiskNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskResourceGroupNameInput">DataDiskResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.shouldDeallocateInput">ShouldDeallocateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.ttlInHoursInput">TtlInHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskName">DataDiskName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskResourceGroupName">DataDiskResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.shouldDeallocate">ShouldDeallocate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.ttlInHours">TtlInHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataDiskNameInput`<sup>Optional</sup> <a name="DataDiskNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskNameInput"></a>

```csharp
public string DataDiskNameInput { get; }
```

- *Type:* string

---

##### `DataDiskResourceGroupNameInput`<sup>Optional</sup> <a name="DataDiskResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskResourceGroupNameInput"></a>

```csharp
public string DataDiskResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ShouldDeallocateInput`<sup>Optional</sup> <a name="ShouldDeallocateInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.shouldDeallocateInput"></a>

```csharp
public object ShouldDeallocateInput { get; }
```

- *Type:* object

---

##### `TtlInHoursInput`<sup>Optional</sup> <a name="TtlInHoursInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.ttlInHoursInput"></a>

```csharp
public double TtlInHoursInput { get; }
```

- *Type:* double

---

##### `DataDiskName`<sup>Required</sup> <a name="DataDiskName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskName"></a>

```csharp
public string DataDiskName { get; }
```

- *Type:* string

---

##### `DataDiskResourceGroupName`<sup>Required</sup> <a name="DataDiskResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskResourceGroupName"></a>

```csharp
public string DataDiskResourceGroupName { get; }
```

- *Type:* string

---

##### `ShouldDeallocate`<sup>Required</sup> <a name="ShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.shouldDeallocate"></a>

```csharp
public object ShouldDeallocate { get; }
```

- *Type:* object

---

##### `TtlInHours`<sup>Required</sup> <a name="TtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.ttlInHours"></a>

```csharp
public double TtlInHours { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureExtensionList <a name="StatefulNodeAzureExtensionList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureExtensionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.get"></a>

```csharp
private StatefulNodeAzureExtensionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureExtensionOutputReference <a name="StatefulNodeAzureExtensionOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureExtensionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resetProtectedSettings">ResetProtectedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resetPublicSettings">ResetPublicSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProtectedSettings` <a name="ResetProtectedSettings" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resetProtectedSettings"></a>

```csharp
private void ResetProtectedSettings()
```

##### `ResetPublicSettings` <a name="ResetPublicSettings" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resetPublicSettings"></a>

```csharp
private void ResetPublicSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.apiVersionInput">ApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.minorVersionAutoUpgradeInput">MinorVersionAutoUpgradeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.protectedSettingsInput">ProtectedSettingsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publicSettingsInput">PublicSettingsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publisherInput">PublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.apiVersion">ApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.minorVersionAutoUpgrade">MinorVersionAutoUpgrade</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.protectedSettings">ProtectedSettings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publicSettings">PublicSettings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiVersionInput`<sup>Optional</sup> <a name="ApiVersionInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.apiVersionInput"></a>

```csharp
public string ApiVersionInput { get; }
```

- *Type:* string

---

##### `MinorVersionAutoUpgradeInput`<sup>Optional</sup> <a name="MinorVersionAutoUpgradeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.minorVersionAutoUpgradeInput"></a>

```csharp
public object MinorVersionAutoUpgradeInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtectedSettingsInput`<sup>Optional</sup> <a name="ProtectedSettingsInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.protectedSettingsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ProtectedSettingsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PublicSettingsInput`<sup>Optional</sup> <a name="PublicSettingsInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publicSettingsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PublicSettingsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publisherInput"></a>

```csharp
public string PublisherInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.apiVersion"></a>

```csharp
public string ApiVersion { get; }
```

- *Type:* string

---

##### `MinorVersionAutoUpgrade`<sup>Required</sup> <a name="MinorVersionAutoUpgrade" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.minorVersionAutoUpgrade"></a>

```csharp
public object MinorVersionAutoUpgrade { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProtectedSettings`<sup>Required</sup> <a name="ProtectedSettings" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.protectedSettings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ProtectedSettings { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PublicSettings`<sup>Required</sup> <a name="PublicSettings" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publicSettings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PublicSettings { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureHealthOutputReference <a name="StatefulNodeAzureHealthOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureHealthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resetGracePeriod">ResetGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resetUnhealthyDuration">ResetUnhealthyDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGracePeriod` <a name="ResetGracePeriod" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resetGracePeriod"></a>

```csharp
private void ResetGracePeriod()
```

##### `ResetUnhealthyDuration` <a name="ResetUnhealthyDuration" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resetUnhealthyDuration"></a>

```csharp
private void ResetUnhealthyDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.autoHealingInput">AutoHealingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.gracePeriodInput">GracePeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.healthCheckTypesInput">HealthCheckTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.unhealthyDurationInput">UnhealthyDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.autoHealing">AutoHealing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.gracePeriod">GracePeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.healthCheckTypes">HealthCheckTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.unhealthyDuration">UnhealthyDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoHealingInput`<sup>Optional</sup> <a name="AutoHealingInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.autoHealingInput"></a>

```csharp
public object AutoHealingInput { get; }
```

- *Type:* object

---

##### `GracePeriodInput`<sup>Optional</sup> <a name="GracePeriodInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.gracePeriodInput"></a>

```csharp
public double GracePeriodInput { get; }
```

- *Type:* double

---

##### `HealthCheckTypesInput`<sup>Optional</sup> <a name="HealthCheckTypesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.healthCheckTypesInput"></a>

```csharp
public string[] HealthCheckTypesInput { get; }
```

- *Type:* string[]

---

##### `UnhealthyDurationInput`<sup>Optional</sup> <a name="UnhealthyDurationInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.unhealthyDurationInput"></a>

```csharp
public double UnhealthyDurationInput { get; }
```

- *Type:* double

---

##### `AutoHealing`<sup>Required</sup> <a name="AutoHealing" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.autoHealing"></a>

```csharp
public object AutoHealing { get; }
```

- *Type:* object

---

##### `GracePeriod`<sup>Required</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.gracePeriod"></a>

```csharp
public double GracePeriod { get; }
```

- *Type:* double

---

##### `HealthCheckTypes`<sup>Required</sup> <a name="HealthCheckTypes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.healthCheckTypes"></a>

```csharp
public string[] HealthCheckTypes { get; }
```

- *Type:* string[]

---

##### `UnhealthyDuration`<sup>Required</sup> <a name="UnhealthyDuration" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.unhealthyDuration"></a>

```csharp
public double UnhealthyDuration { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.internalValue"></a>

```csharp
public StatefulNodeAzureHealth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a>

---


### StatefulNodeAzureImageCustomImageList <a name="StatefulNodeAzureImageCustomImageList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureImageCustomImageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.get"></a>

```csharp
private StatefulNodeAzureImageCustomImageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureImageCustomImageOutputReference <a name="StatefulNodeAzureImageCustomImageOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureImageCustomImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.customImageResourceGroupNameInput">CustomImageResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.customImageResourceGroupName">CustomImageResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomImageResourceGroupNameInput`<sup>Optional</sup> <a name="CustomImageResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.customImageResourceGroupNameInput"></a>

```csharp
public string CustomImageResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `CustomImageResourceGroupName`<sup>Required</sup> <a name="CustomImageResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.customImageResourceGroupName"></a>

```csharp
public string CustomImageResourceGroupName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureImageGalleryList <a name="StatefulNodeAzureImageGalleryList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureImageGalleryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.get"></a>

```csharp
private StatefulNodeAzureImageGalleryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureImageGalleryOutputReference <a name="StatefulNodeAzureImageGalleryOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureImageGalleryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryNameInput">GalleryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryResourceGroupNameInput">GalleryResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.versionNameInput">VersionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryName">GalleryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryResourceGroupName">GalleryResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.versionName">VersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GalleryNameInput`<sup>Optional</sup> <a name="GalleryNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryNameInput"></a>

```csharp
public string GalleryNameInput { get; }
```

- *Type:* string

---

##### `GalleryResourceGroupNameInput`<sup>Optional</sup> <a name="GalleryResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryResourceGroupNameInput"></a>

```csharp
public string GalleryResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `VersionNameInput`<sup>Optional</sup> <a name="VersionNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.versionNameInput"></a>

```csharp
public string VersionNameInput { get; }
```

- *Type:* string

---

##### `GalleryName`<sup>Required</sup> <a name="GalleryName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryName"></a>

```csharp
public string GalleryName { get; }
```

- *Type:* string

---

##### `GalleryResourceGroupName`<sup>Required</sup> <a name="GalleryResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryResourceGroupName"></a>

```csharp
public string GalleryResourceGroupName { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.versionName"></a>

```csharp
public string VersionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureImageMarketplaceImageList <a name="StatefulNodeAzureImageMarketplaceImageList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureImageMarketplaceImageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.get"></a>

```csharp
private StatefulNodeAzureImageMarketplaceImageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureImageMarketplaceImageOutputReference <a name="StatefulNodeAzureImageMarketplaceImageOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureImageMarketplaceImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.offerInput">OfferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.publisherInput">PublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.offer">Offer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OfferInput`<sup>Optional</sup> <a name="OfferInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.offerInput"></a>

```csharp
public string OfferInput { get; }
```

- *Type:* string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.publisherInput"></a>

```csharp
public string PublisherInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.offer"></a>

```csharp
public string Offer { get; }
```

- *Type:* string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureImageOutputReference <a name="StatefulNodeAzureImageOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putCustomImage">PutCustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putGallery">PutGallery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putMarketplaceImage">PutMarketplaceImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resetCustomImage">ResetCustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resetGallery">ResetGallery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resetMarketplaceImage">ResetMarketplaceImage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomImage` <a name="PutCustomImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putCustomImage"></a>

```csharp
private void PutCustomImage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putCustomImage.parameter.value"></a>

- *Type:* object

---

##### `PutGallery` <a name="PutGallery" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putGallery"></a>

```csharp
private void PutGallery(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putGallery.parameter.value"></a>

- *Type:* object

---

##### `PutMarketplaceImage` <a name="PutMarketplaceImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putMarketplaceImage"></a>

```csharp
private void PutMarketplaceImage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putMarketplaceImage.parameter.value"></a>

- *Type:* object

---

##### `ResetCustomImage` <a name="ResetCustomImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resetCustomImage"></a>

```csharp
private void ResetCustomImage()
```

##### `ResetGallery` <a name="ResetGallery" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resetGallery"></a>

```csharp
private void ResetGallery()
```

##### `ResetMarketplaceImage` <a name="ResetMarketplaceImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resetMarketplaceImage"></a>

```csharp
private void ResetMarketplaceImage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.customImage">CustomImage</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList">StatefulNodeAzureImageCustomImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.gallery">Gallery</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList">StatefulNodeAzureImageGalleryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.marketplaceImage">MarketplaceImage</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList">StatefulNodeAzureImageMarketplaceImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.customImageInput">CustomImageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.galleryInput">GalleryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.marketplaceImageInput">MarketplaceImageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomImage`<sup>Required</sup> <a name="CustomImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.customImage"></a>

```csharp
public StatefulNodeAzureImageCustomImageList CustomImage { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList">StatefulNodeAzureImageCustomImageList</a>

---

##### `Gallery`<sup>Required</sup> <a name="Gallery" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.gallery"></a>

```csharp
public StatefulNodeAzureImageGalleryList Gallery { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList">StatefulNodeAzureImageGalleryList</a>

---

##### `MarketplaceImage`<sup>Required</sup> <a name="MarketplaceImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.marketplaceImage"></a>

```csharp
public StatefulNodeAzureImageMarketplaceImageList MarketplaceImage { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList">StatefulNodeAzureImageMarketplaceImageList</a>

---

##### `CustomImageInput`<sup>Optional</sup> <a name="CustomImageInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.customImageInput"></a>

```csharp
public object CustomImageInput { get; }
```

- *Type:* object

---

##### `GalleryInput`<sup>Optional</sup> <a name="GalleryInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.galleryInput"></a>

```csharp
public object GalleryInput { get; }
```

- *Type:* object

---

##### `MarketplaceImageInput`<sup>Optional</sup> <a name="MarketplaceImageInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.marketplaceImageInput"></a>

```csharp
public object MarketplaceImageInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.internalValue"></a>

```csharp
public StatefulNodeAzureImage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a>

---


### StatefulNodeAzureImportVmList <a name="StatefulNodeAzureImportVmList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureImportVmList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.get"></a>

```csharp
private StatefulNodeAzureImportVmOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureImportVmOutputReference <a name="StatefulNodeAzureImportVmOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureImportVmOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resetDrainingTimeout">ResetDrainingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resetResourcesRetentionTime">ResetResourcesRetentionTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDrainingTimeout` <a name="ResetDrainingTimeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resetDrainingTimeout"></a>

```csharp
private void ResetDrainingTimeout()
```

##### `ResetResourcesRetentionTime` <a name="ResetResourcesRetentionTime" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resetResourcesRetentionTime"></a>

```csharp
private void ResetResourcesRetentionTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.drainingTimeoutInput">DrainingTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.originalVmNameInput">OriginalVmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourcesRetentionTimeInput">ResourcesRetentionTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.drainingTimeout">DrainingTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.originalVmName">OriginalVmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourcesRetentionTime">ResourcesRetentionTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DrainingTimeoutInput`<sup>Optional</sup> <a name="DrainingTimeoutInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.drainingTimeoutInput"></a>

```csharp
public double DrainingTimeoutInput { get; }
```

- *Type:* double

---

##### `OriginalVmNameInput`<sup>Optional</sup> <a name="OriginalVmNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.originalVmNameInput"></a>

```csharp
public string OriginalVmNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ResourcesRetentionTimeInput`<sup>Optional</sup> <a name="ResourcesRetentionTimeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourcesRetentionTimeInput"></a>

```csharp
public double ResourcesRetentionTimeInput { get; }
```

- *Type:* double

---

##### `DrainingTimeout`<sup>Required</sup> <a name="DrainingTimeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.drainingTimeout"></a>

```csharp
public double DrainingTimeout { get; }
```

- *Type:* double

---

##### `OriginalVmName`<sup>Required</sup> <a name="OriginalVmName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.originalVmName"></a>

```csharp
public string OriginalVmName { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `ResourcesRetentionTime`<sup>Required</sup> <a name="ResourcesRetentionTime" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourcesRetentionTime"></a>

```csharp
public double ResourcesRetentionTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureLoadBalancerList <a name="StatefulNodeAzureLoadBalancerList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureLoadBalancerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.get"></a>

```csharp
private StatefulNodeAzureLoadBalancerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureLoadBalancerOutputReference <a name="StatefulNodeAzureLoadBalancerOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureLoadBalancerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.resetSku">ResetSku</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSku` <a name="ResetSku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.resetSku"></a>

```csharp
private void ResetSku()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.backendPoolNamesInput">BackendPoolNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.backendPoolNames">BackendPoolNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendPoolNamesInput`<sup>Optional</sup> <a name="BackendPoolNamesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.backendPoolNamesInput"></a>

```csharp
public string[] BackendPoolNamesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `BackendPoolNames`<sup>Required</sup> <a name="BackendPoolNames" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.backendPoolNames"></a>

```csharp
public string[] BackendPoolNames { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureLoginOutputReference <a name="StatefulNodeAzureLoginOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureLoginOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resetSshPublicKey">ResetSshPublicKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetSshPublicKey` <a name="ResetSshPublicKey" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resetSshPublicKey"></a>

```csharp
private void ResetSshPublicKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.sshPublicKeyInput">SshPublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.sshPublicKey">SshPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `SshPublicKeyInput`<sup>Optional</sup> <a name="SshPublicKeyInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.sshPublicKeyInput"></a>

```csharp
public string SshPublicKeyInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `SshPublicKey`<sup>Required</sup> <a name="SshPublicKey" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.sshPublicKey"></a>

```csharp
public string SshPublicKey { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.internalValue"></a>

```csharp
public StatefulNodeAzureLogin InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a>

---


### StatefulNodeAzureManagedServiceIdentitiesList <a name="StatefulNodeAzureManagedServiceIdentitiesList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureManagedServiceIdentitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.get"></a>

```csharp
private StatefulNodeAzureManagedServiceIdentitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureManagedServiceIdentitiesOutputReference <a name="StatefulNodeAzureManagedServiceIdentitiesOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureManagedServiceIdentitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList <a name="StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.get"></a>

```csharp
private StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference <a name="StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.privateIpAddressVersionInput">PrivateIpAddressVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.privateIpAddressVersion">PrivateIpAddressVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrivateIpAddressVersionInput`<sup>Optional</sup> <a name="PrivateIpAddressVersionInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.privateIpAddressVersionInput"></a>

```csharp
public string PrivateIpAddressVersionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateIpAddressVersion`<sup>Required</sup> <a name="PrivateIpAddressVersion" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.privateIpAddressVersion"></a>

```csharp
public string PrivateIpAddressVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList <a name="StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.get"></a>

```csharp
private StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference <a name="StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.networkResourceGroupNameInput">NetworkResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.networkResourceGroupName">NetworkResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkResourceGroupNameInput`<sup>Optional</sup> <a name="NetworkResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.networkResourceGroupNameInput"></a>

```csharp
public string NetworkResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkResourceGroupName`<sup>Required</sup> <a name="NetworkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.networkResourceGroupName"></a>

```csharp
public string NetworkResourceGroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureNetworkNetworkInterfaceList <a name="StatefulNodeAzureNetworkNetworkInterfaceList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureNetworkNetworkInterfaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.get"></a>

```csharp
private StatefulNodeAzureNetworkNetworkInterfaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList <a name="StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.get"></a>

```csharp
private StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference <a name="StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resetNetworkResourceGroupName">ResetNetworkResourceGroupName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNetworkResourceGroupName` <a name="ResetNetworkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resetNetworkResourceGroupName"></a>

```csharp
private void ResetNetworkResourceGroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.networkResourceGroupNameInput">NetworkResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.networkResourceGroupName">NetworkResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkResourceGroupNameInput`<sup>Optional</sup> <a name="NetworkResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.networkResourceGroupNameInput"></a>

```csharp
public string NetworkResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkResourceGroupName`<sup>Required</sup> <a name="NetworkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.networkResourceGroupName"></a>

```csharp
public string NetworkResourceGroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureNetworkNetworkInterfaceOutputReference <a name="StatefulNodeAzureNetworkNetworkInterfaceOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureNetworkNetworkInterfaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putAdditionalIpConfigurations">PutAdditionalIpConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putApplicationSecurityGroups">PutApplicationSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putNetworkSecurityGroup">PutNetworkSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putPublicIps">PutPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetAdditionalIpConfigurations">ResetAdditionalIpConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetApplicationSecurityGroups">ResetApplicationSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetAssignPublicIp">ResetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetEnableIpForwarding">ResetEnableIpForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetNetworkSecurityGroup">ResetNetworkSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetPrivateIpAddresses">ResetPrivateIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetPublicIps">ResetPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetPublicIpSku">ResetPublicIpSku</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalIpConfigurations` <a name="PutAdditionalIpConfigurations" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putAdditionalIpConfigurations"></a>

```csharp
private void PutAdditionalIpConfigurations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putAdditionalIpConfigurations.parameter.value"></a>

- *Type:* object

---

##### `PutApplicationSecurityGroups` <a name="PutApplicationSecurityGroups" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putApplicationSecurityGroups"></a>

```csharp
private void PutApplicationSecurityGroups(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putApplicationSecurityGroups.parameter.value"></a>

- *Type:* object

---

##### `PutNetworkSecurityGroup` <a name="PutNetworkSecurityGroup" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putNetworkSecurityGroup"></a>

```csharp
private void PutNetworkSecurityGroup(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putNetworkSecurityGroup.parameter.value"></a>

- *Type:* object

---

##### `PutPublicIps` <a name="PutPublicIps" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putPublicIps"></a>

```csharp
private void PutPublicIps(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putPublicIps.parameter.value"></a>

- *Type:* object

---

##### `ResetAdditionalIpConfigurations` <a name="ResetAdditionalIpConfigurations" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetAdditionalIpConfigurations"></a>

```csharp
private void ResetAdditionalIpConfigurations()
```

##### `ResetApplicationSecurityGroups` <a name="ResetApplicationSecurityGroups" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetApplicationSecurityGroups"></a>

```csharp
private void ResetApplicationSecurityGroups()
```

##### `ResetAssignPublicIp` <a name="ResetAssignPublicIp" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetAssignPublicIp"></a>

```csharp
private void ResetAssignPublicIp()
```

##### `ResetEnableIpForwarding` <a name="ResetEnableIpForwarding" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetEnableIpForwarding"></a>

```csharp
private void ResetEnableIpForwarding()
```

##### `ResetNetworkSecurityGroup` <a name="ResetNetworkSecurityGroup" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetNetworkSecurityGroup"></a>

```csharp
private void ResetNetworkSecurityGroup()
```

##### `ResetPrivateIpAddresses` <a name="ResetPrivateIpAddresses" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetPrivateIpAddresses"></a>

```csharp
private void ResetPrivateIpAddresses()
```

##### `ResetPublicIps` <a name="ResetPublicIps" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetPublicIps"></a>

```csharp
private void ResetPublicIps()
```

##### `ResetPublicIpSku` <a name="ResetPublicIpSku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetPublicIpSku"></a>

```csharp
private void ResetPublicIpSku()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.additionalIpConfigurations">AdditionalIpConfigurations</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.applicationSecurityGroups">ApplicationSecurityGroups</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.networkSecurityGroup">NetworkSecurityGroup</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIps">PublicIps</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList">StatefulNodeAzureNetworkNetworkInterfacePublicIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.additionalIpConfigurationsInput">AdditionalIpConfigurationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.applicationSecurityGroupsInput">ApplicationSecurityGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.assignPublicIpInput">AssignPublicIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.enableIpForwardingInput">EnableIpForwardingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.isPrimaryInput">IsPrimaryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.networkSecurityGroupInput">NetworkSecurityGroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.privateIpAddressesInput">PrivateIpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIpsInput">PublicIpsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIpSkuInput">PublicIpSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.subnetNameInput">SubnetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.assignPublicIp">AssignPublicIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.enableIpForwarding">EnableIpForwarding</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.isPrimary">IsPrimary</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.privateIpAddresses">PrivateIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIpSku">PublicIpSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.subnetName">SubnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalIpConfigurations`<sup>Required</sup> <a name="AdditionalIpConfigurations" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.additionalIpConfigurations"></a>

```csharp
public StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList AdditionalIpConfigurations { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList</a>

---

##### `ApplicationSecurityGroups`<sup>Required</sup> <a name="ApplicationSecurityGroups" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.applicationSecurityGroups"></a>

```csharp
public StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList ApplicationSecurityGroups { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList</a>

---

##### `NetworkSecurityGroup`<sup>Required</sup> <a name="NetworkSecurityGroup" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.networkSecurityGroup"></a>

```csharp
public StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList NetworkSecurityGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList</a>

---

##### `PublicIps`<sup>Required</sup> <a name="PublicIps" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIps"></a>

```csharp
public StatefulNodeAzureNetworkNetworkInterfacePublicIpsList PublicIps { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList">StatefulNodeAzureNetworkNetworkInterfacePublicIpsList</a>

---

##### `AdditionalIpConfigurationsInput`<sup>Optional</sup> <a name="AdditionalIpConfigurationsInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.additionalIpConfigurationsInput"></a>

```csharp
public object AdditionalIpConfigurationsInput { get; }
```

- *Type:* object

---

##### `ApplicationSecurityGroupsInput`<sup>Optional</sup> <a name="ApplicationSecurityGroupsInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.applicationSecurityGroupsInput"></a>

```csharp
public object ApplicationSecurityGroupsInput { get; }
```

- *Type:* object

---

##### `AssignPublicIpInput`<sup>Optional</sup> <a name="AssignPublicIpInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.assignPublicIpInput"></a>

```csharp
public object AssignPublicIpInput { get; }
```

- *Type:* object

---

##### `EnableIpForwardingInput`<sup>Optional</sup> <a name="EnableIpForwardingInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.enableIpForwardingInput"></a>

```csharp
public object EnableIpForwardingInput { get; }
```

- *Type:* object

---

##### `IsPrimaryInput`<sup>Optional</sup> <a name="IsPrimaryInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.isPrimaryInput"></a>

```csharp
public object IsPrimaryInput { get; }
```

- *Type:* object

---

##### `NetworkSecurityGroupInput`<sup>Optional</sup> <a name="NetworkSecurityGroupInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.networkSecurityGroupInput"></a>

```csharp
public object NetworkSecurityGroupInput { get; }
```

- *Type:* object

---

##### `PrivateIpAddressesInput`<sup>Optional</sup> <a name="PrivateIpAddressesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.privateIpAddressesInput"></a>

```csharp
public string[] PrivateIpAddressesInput { get; }
```

- *Type:* string[]

---

##### `PublicIpsInput`<sup>Optional</sup> <a name="PublicIpsInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIpsInput"></a>

```csharp
public object PublicIpsInput { get; }
```

- *Type:* object

---

##### `PublicIpSkuInput`<sup>Optional</sup> <a name="PublicIpSkuInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIpSkuInput"></a>

```csharp
public string PublicIpSkuInput { get; }
```

- *Type:* string

---

##### `SubnetNameInput`<sup>Optional</sup> <a name="SubnetNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.subnetNameInput"></a>

```csharp
public string SubnetNameInput { get; }
```

- *Type:* string

---

##### `AssignPublicIp`<sup>Required</sup> <a name="AssignPublicIp" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.assignPublicIp"></a>

```csharp
public object AssignPublicIp { get; }
```

- *Type:* object

---

##### `EnableIpForwarding`<sup>Required</sup> <a name="EnableIpForwarding" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.enableIpForwarding"></a>

```csharp
public object EnableIpForwarding { get; }
```

- *Type:* object

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.isPrimary"></a>

```csharp
public object IsPrimary { get; }
```

- *Type:* object

---

##### `PrivateIpAddresses`<sup>Required</sup> <a name="PrivateIpAddresses" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.privateIpAddresses"></a>

```csharp
public string[] PrivateIpAddresses { get; }
```

- *Type:* string[]

---

##### `PublicIpSku`<sup>Required</sup> <a name="PublicIpSku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIpSku"></a>

```csharp
public string PublicIpSku { get; }
```

- *Type:* string

---

##### `SubnetName`<sup>Required</sup> <a name="SubnetName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.subnetName"></a>

```csharp
public string SubnetName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureNetworkNetworkInterfacePublicIpsList <a name="StatefulNodeAzureNetworkNetworkInterfacePublicIpsList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureNetworkNetworkInterfacePublicIpsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.get"></a>

```csharp
private StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference <a name="StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.networkResourceGroupNameInput">NetworkResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.networkResourceGroupName">NetworkResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkResourceGroupNameInput`<sup>Optional</sup> <a name="NetworkResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.networkResourceGroupNameInput"></a>

```csharp
public string NetworkResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkResourceGroupName`<sup>Required</sup> <a name="NetworkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.networkResourceGroupName"></a>

```csharp
public string NetworkResourceGroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureNetworkOutputReference <a name="StatefulNodeAzureNetworkOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.putNetworkInterface"></a>

```csharp
private void PutNetworkInterface(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.putNetworkInterface.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList">StatefulNodeAzureNetworkNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkResourceGroupNameInput">NetworkResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.virtualNetworkNameInput">VirtualNetworkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkResourceGroupName">NetworkResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.virtualNetworkName">VirtualNetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkInterface"></a>

```csharp
public StatefulNodeAzureNetworkNetworkInterfaceList NetworkInterface { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList">StatefulNodeAzureNetworkNetworkInterfaceList</a>

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkInterfaceInput"></a>

```csharp
public object NetworkInterfaceInput { get; }
```

- *Type:* object

---

##### `NetworkResourceGroupNameInput`<sup>Optional</sup> <a name="NetworkResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkResourceGroupNameInput"></a>

```csharp
public string NetworkResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkNameInput`<sup>Optional</sup> <a name="VirtualNetworkNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.virtualNetworkNameInput"></a>

```csharp
public string VirtualNetworkNameInput { get; }
```

- *Type:* string

---

##### `NetworkResourceGroupName`<sup>Required</sup> <a name="NetworkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkResourceGroupName"></a>

```csharp
public string NetworkResourceGroupName { get; }
```

- *Type:* string

---

##### `VirtualNetworkName`<sup>Required</sup> <a name="VirtualNetworkName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.virtualNetworkName"></a>

```csharp
public string VirtualNetworkName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.internalValue"></a>

```csharp
public StatefulNodeAzureNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a>

---


### StatefulNodeAzureOsDiskOutputReference <a name="StatefulNodeAzureOsDiskOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureOsDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.resetSizeGb">ResetSizeGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSizeGb` <a name="ResetSizeGb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.resetSizeGb"></a>

```csharp
private void ResetSizeGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.sizeGbInput">SizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.sizeGb">SizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SizeGbInput`<sup>Optional</sup> <a name="SizeGbInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.sizeGbInput"></a>

```csharp
public double SizeGbInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.sizeGb"></a>

```csharp
public double SizeGb { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.internalValue"></a>

```csharp
public StatefulNodeAzureOsDisk InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a>

---


### StatefulNodeAzureSchedulingTaskList <a name="StatefulNodeAzureSchedulingTaskList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureSchedulingTaskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.get"></a>

```csharp
private StatefulNodeAzureSchedulingTaskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureSchedulingTaskOutputReference <a name="StatefulNodeAzureSchedulingTaskOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureSchedulingTaskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.cronExpression">CronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.cronExpressionInput"></a>

```csharp
public string CronExpressionInput { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.cronExpression"></a>

```csharp
public string CronExpression { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureSecretList <a name="StatefulNodeAzureSecretList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureSecretList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.get"></a>

```csharp
private StatefulNodeAzureSecretOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureSecretOutputReference <a name="StatefulNodeAzureSecretOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.putSourceVault">PutSourceVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.putVaultCertificates">PutVaultCertificates</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourceVault` <a name="PutSourceVault" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.putSourceVault"></a>

```csharp
private void PutSourceVault(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.putSourceVault.parameter.value"></a>

- *Type:* object

---

##### `PutVaultCertificates` <a name="PutVaultCertificates" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.putVaultCertificates"></a>

```csharp
private void PutVaultCertificates(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.putVaultCertificates.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.sourceVault">SourceVault</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList">StatefulNodeAzureSecretSourceVaultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.vaultCertificates">VaultCertificates</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList">StatefulNodeAzureSecretVaultCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.sourceVaultInput">SourceVaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.vaultCertificatesInput">VaultCertificatesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceVault`<sup>Required</sup> <a name="SourceVault" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.sourceVault"></a>

```csharp
public StatefulNodeAzureSecretSourceVaultList SourceVault { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList">StatefulNodeAzureSecretSourceVaultList</a>

---

##### `VaultCertificates`<sup>Required</sup> <a name="VaultCertificates" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.vaultCertificates"></a>

```csharp
public StatefulNodeAzureSecretVaultCertificatesList VaultCertificates { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList">StatefulNodeAzureSecretVaultCertificatesList</a>

---

##### `SourceVaultInput`<sup>Optional</sup> <a name="SourceVaultInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.sourceVaultInput"></a>

```csharp
public object SourceVaultInput { get; }
```

- *Type:* object

---

##### `VaultCertificatesInput`<sup>Optional</sup> <a name="VaultCertificatesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.vaultCertificatesInput"></a>

```csharp
public object VaultCertificatesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureSecretSourceVaultList <a name="StatefulNodeAzureSecretSourceVaultList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureSecretSourceVaultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.get"></a>

```csharp
private StatefulNodeAzureSecretSourceVaultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureSecretSourceVaultOutputReference <a name="StatefulNodeAzureSecretSourceVaultOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureSecretSourceVaultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureSecretVaultCertificatesList <a name="StatefulNodeAzureSecretVaultCertificatesList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureSecretVaultCertificatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.get"></a>

```csharp
private StatefulNodeAzureSecretVaultCertificatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureSecretVaultCertificatesOutputReference <a name="StatefulNodeAzureSecretVaultCertificatesOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureSecretVaultCertificatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resetCertificateStore">ResetCertificateStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resetCertificateUrl">ResetCertificateUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateStore` <a name="ResetCertificateStore" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resetCertificateStore"></a>

```csharp
private void ResetCertificateStore()
```

##### `ResetCertificateUrl` <a name="ResetCertificateUrl" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resetCertificateUrl"></a>

```csharp
private void ResetCertificateUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateStoreInput">CertificateStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateUrlInput">CertificateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateStore">CertificateStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateUrl">CertificateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateStoreInput`<sup>Optional</sup> <a name="CertificateStoreInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateStoreInput"></a>

```csharp
public string CertificateStoreInput { get; }
```

- *Type:* string

---

##### `CertificateUrlInput`<sup>Optional</sup> <a name="CertificateUrlInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateUrlInput"></a>

```csharp
public string CertificateUrlInput { get; }
```

- *Type:* string

---

##### `CertificateStore`<sup>Required</sup> <a name="CertificateStore" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateStore"></a>

```csharp
public string CertificateStore { get; }
```

- *Type:* string

---

##### `CertificateUrl`<sup>Required</sup> <a name="CertificateUrl" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateUrl"></a>

```csharp
public string CertificateUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureSignalList <a name="StatefulNodeAzureSignalList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureSignalList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.get"></a>

```csharp
private StatefulNodeAzureSignalOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureSignalOutputReference <a name="StatefulNodeAzureSignalOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureSignalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureStrategyOutputReference <a name="StatefulNodeAzureStrategyOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.putRevertToSpot">PutRevertToSpot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetDrainingTimeout">ResetDrainingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetOptimizationWindows">ResetOptimizationWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetPreferredLifeCycle">ResetPreferredLifeCycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetRevertToSpot">ResetRevertToSpot</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRevertToSpot` <a name="PutRevertToSpot" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.putRevertToSpot"></a>

```csharp
private void PutRevertToSpot(StatefulNodeAzureStrategyRevertToSpot Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.putRevertToSpot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a>

---

##### `ResetDrainingTimeout` <a name="ResetDrainingTimeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetDrainingTimeout"></a>

```csharp
private void ResetDrainingTimeout()
```

##### `ResetOptimizationWindows` <a name="ResetOptimizationWindows" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetOptimizationWindows"></a>

```csharp
private void ResetOptimizationWindows()
```

##### `ResetPreferredLifeCycle` <a name="ResetPreferredLifeCycle" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetPreferredLifeCycle"></a>

```csharp
private void ResetPreferredLifeCycle()
```

##### `ResetRevertToSpot` <a name="ResetRevertToSpot" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetRevertToSpot"></a>

```csharp
private void ResetRevertToSpot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.revertToSpot">RevertToSpot</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference">StatefulNodeAzureStrategyRevertToSpotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.drainingTimeoutInput">DrainingTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.fallbackToOnDemandInput">FallbackToOnDemandInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.optimizationWindowsInput">OptimizationWindowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.preferredLifeCycleInput">PreferredLifeCycleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.revertToSpotInput">RevertToSpotInput</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.drainingTimeout">DrainingTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.fallbackToOnDemand">FallbackToOnDemand</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.optimizationWindows">OptimizationWindows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.preferredLifeCycle">PreferredLifeCycle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RevertToSpot`<sup>Required</sup> <a name="RevertToSpot" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.revertToSpot"></a>

```csharp
public StatefulNodeAzureStrategyRevertToSpotOutputReference RevertToSpot { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference">StatefulNodeAzureStrategyRevertToSpotOutputReference</a>

---

##### `DrainingTimeoutInput`<sup>Optional</sup> <a name="DrainingTimeoutInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.drainingTimeoutInput"></a>

```csharp
public double DrainingTimeoutInput { get; }
```

- *Type:* double

---

##### `FallbackToOnDemandInput`<sup>Optional</sup> <a name="FallbackToOnDemandInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.fallbackToOnDemandInput"></a>

```csharp
public object FallbackToOnDemandInput { get; }
```

- *Type:* object

---

##### `OptimizationWindowsInput`<sup>Optional</sup> <a name="OptimizationWindowsInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.optimizationWindowsInput"></a>

```csharp
public string[] OptimizationWindowsInput { get; }
```

- *Type:* string[]

---

##### `PreferredLifeCycleInput`<sup>Optional</sup> <a name="PreferredLifeCycleInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.preferredLifeCycleInput"></a>

```csharp
public string PreferredLifeCycleInput { get; }
```

- *Type:* string

---

##### `RevertToSpotInput`<sup>Optional</sup> <a name="RevertToSpotInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.revertToSpotInput"></a>

```csharp
public StatefulNodeAzureStrategyRevertToSpot RevertToSpotInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a>

---

##### `DrainingTimeout`<sup>Required</sup> <a name="DrainingTimeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.drainingTimeout"></a>

```csharp
public double DrainingTimeout { get; }
```

- *Type:* double

---

##### `FallbackToOnDemand`<sup>Required</sup> <a name="FallbackToOnDemand" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.fallbackToOnDemand"></a>

```csharp
public object FallbackToOnDemand { get; }
```

- *Type:* object

---

##### `OptimizationWindows`<sup>Required</sup> <a name="OptimizationWindows" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.optimizationWindows"></a>

```csharp
public string[] OptimizationWindows { get; }
```

- *Type:* string[]

---

##### `PreferredLifeCycle`<sup>Required</sup> <a name="PreferredLifeCycle" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.preferredLifeCycle"></a>

```csharp
public string PreferredLifeCycle { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.internalValue"></a>

```csharp
public StatefulNodeAzureStrategy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a>

---


### StatefulNodeAzureStrategyRevertToSpotOutputReference <a name="StatefulNodeAzureStrategyRevertToSpotOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureStrategyRevertToSpotOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.performAtInput">PerformAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.performAt">PerformAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PerformAtInput`<sup>Optional</sup> <a name="PerformAtInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.performAtInput"></a>

```csharp
public string PerformAtInput { get; }
```

- *Type:* string

---

##### `PerformAt`<sup>Required</sup> <a name="PerformAt" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.performAt"></a>

```csharp
public string PerformAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.internalValue"></a>

```csharp
public StatefulNodeAzureStrategyRevertToSpot InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a>

---


### StatefulNodeAzureTagList <a name="StatefulNodeAzureTagList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.get"></a>

```csharp
private StatefulNodeAzureTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureTagOutputReference <a name="StatefulNodeAzureTagOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.resetTagValue">ResetTagValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTagValue` <a name="ResetTagValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.resetTagValue"></a>

```csharp
private void ResetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagValueInput">TagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagValue">TagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagKeyInput"></a>

```csharp
public string TagKeyInput { get; }
```

- *Type:* string

---

##### `TagValueInput`<sup>Optional</sup> <a name="TagValueInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagValueInput"></a>

```csharp
public string TagValueInput { get; }
```

- *Type:* string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagValue"></a>

```csharp
public string TagValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureUpdateStateList <a name="StatefulNodeAzureUpdateStateList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureUpdateStateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.get"></a>

```csharp
private StatefulNodeAzureUpdateStateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StatefulNodeAzureUpdateStateOutputReference <a name="StatefulNodeAzureUpdateStateOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new StatefulNodeAzureUpdateStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


