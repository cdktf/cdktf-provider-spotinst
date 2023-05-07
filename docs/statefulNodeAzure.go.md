# `spotinst_stateful_node_azure`

Refer to the Terraform Registory for docs: [`spotinst_stateful_node_azure`](https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure).

# `statefulNodeAzure` Submodule <a name="`statefulNodeAzure` Submodule" id="@cdktf/provider-spotinst.statefulNodeAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StatefulNodeAzure <a name="StatefulNodeAzure" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure spotinst_stateful_node_azure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzure(scope Construct, id *string, config StatefulNodeAzureConfig) StatefulNodeAzure
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig">StatefulNodeAzureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAttachDataDisk` <a name="PutAttachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putAttachDataDisk"></a>

```go
func PutAttachDataDisk(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putAttachDataDisk.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBootDiagnostics` <a name="PutBootDiagnostics" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putBootDiagnostics"></a>

```go
func PutBootDiagnostics(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putBootDiagnostics.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDataDisk` <a name="PutDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDataDisk"></a>

```go
func PutDataDisk(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDataDisk.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDelete` <a name="PutDelete" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDelete"></a>

```go
func PutDelete(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDelete.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDetachDataDisk` <a name="PutDetachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDetachDataDisk"></a>

```go
func PutDetachDataDisk(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putDetachDataDisk.parameter.value"></a>

- *Type:* interface{}

---

##### `PutExtension` <a name="PutExtension" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putExtension"></a>

```go
func PutExtension(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putExtension.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHealth` <a name="PutHealth" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putHealth"></a>

```go
func PutHealth(value StatefulNodeAzureHealth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putHealth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a>

---

##### `PutImage` <a name="PutImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putImage"></a>

```go
func PutImage(value StatefulNodeAzureImage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a>

---

##### `PutImportVm` <a name="PutImportVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putImportVm"></a>

```go
func PutImportVm(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putImportVm.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLoadBalancer` <a name="PutLoadBalancer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putLoadBalancer"></a>

```go
func PutLoadBalancer(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putLoadBalancer.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLogin` <a name="PutLogin" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putLogin"></a>

```go
func PutLogin(value StatefulNodeAzureLogin)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putLogin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a>

---

##### `PutManagedServiceIdentities` <a name="PutManagedServiceIdentities" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putManagedServiceIdentities"></a>

```go
func PutManagedServiceIdentities(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putManagedServiceIdentities.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putNetwork"></a>

```go
func PutNetwork(value StatefulNodeAzureNetwork)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a>

---

##### `PutOsDisk` <a name="PutOsDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putOsDisk"></a>

```go
func PutOsDisk(value StatefulNodeAzureOsDisk)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putOsDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a>

---

##### `PutSchedulingTask` <a name="PutSchedulingTask" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSchedulingTask"></a>

```go
func PutSchedulingTask(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSchedulingTask.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSecret` <a name="PutSecret" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSecret"></a>

```go
func PutSecret(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSecret.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSignal` <a name="PutSignal" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSignal"></a>

```go
func PutSignal(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putSignal.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStrategy` <a name="PutStrategy" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putStrategy"></a>

```go
func PutStrategy(value StatefulNodeAzureStrategy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a>

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putTag"></a>

```go
func PutTag(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putTag.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUpdateState` <a name="PutUpdateState" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putUpdateState"></a>

```go
func PutUpdateState(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.putUpdateState.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAttachDataDisk` <a name="ResetAttachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetAttachDataDisk"></a>

```go
func ResetAttachDataDisk()
```

##### `ResetBootDiagnostics` <a name="ResetBootDiagnostics" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetBootDiagnostics"></a>

```go
func ResetBootDiagnostics()
```

##### `ResetCustomData` <a name="ResetCustomData" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetCustomData"></a>

```go
func ResetCustomData()
```

##### `ResetDataDisk` <a name="ResetDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDataDisk"></a>

```go
func ResetDataDisk()
```

##### `ResetDataDisksPersistenceMode` <a name="ResetDataDisksPersistenceMode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDataDisksPersistenceMode"></a>

```go
func ResetDataDisksPersistenceMode()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDetachDataDisk` <a name="ResetDetachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetDetachDataDisk"></a>

```go
func ResetDetachDataDisk()
```

##### `ResetExtension` <a name="ResetExtension" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetExtension"></a>

```go
func ResetExtension()
```

##### `ResetHealth` <a name="ResetHealth" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetHealth"></a>

```go
func ResetHealth()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetId"></a>

```go
func ResetId()
```

##### `ResetImportVm` <a name="ResetImportVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetImportVm"></a>

```go
func ResetImportVm()
```

##### `ResetLoadBalancer` <a name="ResetLoadBalancer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetLoadBalancer"></a>

```go
func ResetLoadBalancer()
```

##### `ResetManagedServiceIdentities` <a name="ResetManagedServiceIdentities" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetManagedServiceIdentities"></a>

```go
func ResetManagedServiceIdentities()
```

##### `ResetOsDisk` <a name="ResetOsDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetOsDisk"></a>

```go
func ResetOsDisk()
```

##### `ResetOsDiskPersistenceMode` <a name="ResetOsDiskPersistenceMode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetOsDiskPersistenceMode"></a>

```go
func ResetOsDiskPersistenceMode()
```

##### `ResetPreferredSpotSizes` <a name="ResetPreferredSpotSizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetPreferredSpotSizes"></a>

```go
func ResetPreferredSpotSizes()
```

##### `ResetPreferredZones` <a name="ResetPreferredZones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetPreferredZones"></a>

```go
func ResetPreferredZones()
```

##### `ResetSchedulingTask` <a name="ResetSchedulingTask" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetSchedulingTask"></a>

```go
func ResetSchedulingTask()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetSecret"></a>

```go
func ResetSecret()
```

##### `ResetShouldPersistVm` <a name="ResetShouldPersistVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetShouldPersistVm"></a>

```go
func ResetShouldPersistVm()
```

##### `ResetShutdownScript` <a name="ResetShutdownScript" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetShutdownScript"></a>

```go
func ResetShutdownScript()
```

##### `ResetSignal` <a name="ResetSignal" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetSignal"></a>

```go
func ResetSignal()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetTag"></a>

```go
func ResetTag()
```

##### `ResetUpdateState` <a name="ResetUpdateState" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetUpdateState"></a>

```go
func ResetUpdateState()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.resetZones"></a>

```go
func ResetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.StatefulNodeAzure_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.StatefulNodeAzure_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.StatefulNodeAzure_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
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
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.attachDataDiskInput">AttachDataDiskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.bootDiagnosticsInput">BootDiagnosticsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.customDataInput">CustomDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDiskInput">DataDiskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDisksPersistenceModeInput">DataDisksPersistenceModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.deleteInput">DeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.detachDataDiskInput">DetachDataDiskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.extensionInput">ExtensionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.healthInput">HealthInput</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.imageInput">ImageInput</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.importVmInput">ImportVmInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.loadBalancerInput">LoadBalancerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.loginInput">LoginInput</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.managedServiceIdentitiesInput">ManagedServiceIdentitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.odSizesInput">OdSizesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDiskInput">OsDiskInput</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDiskPersistenceModeInput">OsDiskPersistenceModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osInput">OsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredSpotSizesInput">PreferredSpotSizesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredZonesInput">PreferredZonesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.schedulingTaskInput">SchedulingTaskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.secretInput">SecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistDataDisksInput">ShouldPersistDataDisksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistNetworkInput">ShouldPersistNetworkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistOsDiskInput">ShouldPersistOsDiskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistVmInput">ShouldPersistVmInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shutdownScriptInput">ShutdownScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.signalInput">SignalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.spotSizesInput">SpotSizesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.strategyInput">StrategyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.tagInput">TagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.updateStateInput">UpdateStateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.zonesInput">ZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.customData">CustomData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDisksPersistenceMode">DataDisksPersistenceMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.odSizes">OdSizes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.os">Os</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDiskPersistenceMode">OsDiskPersistenceMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredSpotSizes">PreferredSpotSizes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredZones">PreferredZones</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistDataDisks">ShouldPersistDataDisks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistNetwork">ShouldPersistNetwork</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistOsDisk">ShouldPersistOsDisk</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistVm">ShouldPersistVm</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shutdownScript">ShutdownScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.spotSizes">SpotSizes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttachDataDisk`<sup>Required</sup> <a name="AttachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.attachDataDisk"></a>

```go
func AttachDataDisk() StatefulNodeAzureAttachDataDiskList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList">StatefulNodeAzureAttachDataDiskList</a>

---

##### `BootDiagnostics`<sup>Required</sup> <a name="BootDiagnostics" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.bootDiagnostics"></a>

```go
func BootDiagnostics() StatefulNodeAzureBootDiagnosticsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList">StatefulNodeAzureBootDiagnosticsList</a>

---

##### `DataDisk`<sup>Required</sup> <a name="DataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDisk"></a>

```go
func DataDisk() StatefulNodeAzureDataDiskList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList">StatefulNodeAzureDataDiskList</a>

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.delete"></a>

```go
func Delete() StatefulNodeAzureDeleteList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList">StatefulNodeAzureDeleteList</a>

---

##### `DetachDataDisk`<sup>Required</sup> <a name="DetachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.detachDataDisk"></a>

```go
func DetachDataDisk() StatefulNodeAzureDetachDataDiskList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList">StatefulNodeAzureDetachDataDiskList</a>

---

##### `Extension`<sup>Required</sup> <a name="Extension" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.extension"></a>

```go
func Extension() StatefulNodeAzureExtensionList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList">StatefulNodeAzureExtensionList</a>

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.health"></a>

```go
func Health() StatefulNodeAzureHealthOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference">StatefulNodeAzureHealthOutputReference</a>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.image"></a>

```go
func Image() StatefulNodeAzureImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference">StatefulNodeAzureImageOutputReference</a>

---

##### `ImportVm`<sup>Required</sup> <a name="ImportVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.importVm"></a>

```go
func ImportVm() StatefulNodeAzureImportVmList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList">StatefulNodeAzureImportVmList</a>

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.loadBalancer"></a>

```go
func LoadBalancer() StatefulNodeAzureLoadBalancerList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList">StatefulNodeAzureLoadBalancerList</a>

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.login"></a>

```go
func Login() StatefulNodeAzureLoginOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference">StatefulNodeAzureLoginOutputReference</a>

---

##### `ManagedServiceIdentities`<sup>Required</sup> <a name="ManagedServiceIdentities" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.managedServiceIdentities"></a>

```go
func ManagedServiceIdentities() StatefulNodeAzureManagedServiceIdentitiesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList">StatefulNodeAzureManagedServiceIdentitiesList</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.network"></a>

```go
func Network() StatefulNodeAzureNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference">StatefulNodeAzureNetworkOutputReference</a>

---

##### `OsDisk`<sup>Required</sup> <a name="OsDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDisk"></a>

```go
func OsDisk() StatefulNodeAzureOsDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference">StatefulNodeAzureOsDiskOutputReference</a>

---

##### `SchedulingTask`<sup>Required</sup> <a name="SchedulingTask" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.schedulingTask"></a>

```go
func SchedulingTask() StatefulNodeAzureSchedulingTaskList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList">StatefulNodeAzureSchedulingTaskList</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.secret"></a>

```go
func Secret() StatefulNodeAzureSecretList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList">StatefulNodeAzureSecretList</a>

---

##### `Signal`<sup>Required</sup> <a name="Signal" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.signal"></a>

```go
func Signal() StatefulNodeAzureSignalList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList">StatefulNodeAzureSignalList</a>

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.strategy"></a>

```go
func Strategy() StatefulNodeAzureStrategyOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference">StatefulNodeAzureStrategyOutputReference</a>

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.tag"></a>

```go
func Tag() StatefulNodeAzureTagList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList">StatefulNodeAzureTagList</a>

---

##### `UpdateState`<sup>Required</sup> <a name="UpdateState" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.updateState"></a>

```go
func UpdateState() StatefulNodeAzureUpdateStateList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList">StatefulNodeAzureUpdateStateList</a>

---

##### `AttachDataDiskInput`<sup>Optional</sup> <a name="AttachDataDiskInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.attachDataDiskInput"></a>

```go
func AttachDataDiskInput() interface{}
```

- *Type:* interface{}

---

##### `BootDiagnosticsInput`<sup>Optional</sup> <a name="BootDiagnosticsInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.bootDiagnosticsInput"></a>

```go
func BootDiagnosticsInput() interface{}
```

- *Type:* interface{}

---

##### `CustomDataInput`<sup>Optional</sup> <a name="CustomDataInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.customDataInput"></a>

```go
func CustomDataInput() *string
```

- *Type:* *string

---

##### `DataDiskInput`<sup>Optional</sup> <a name="DataDiskInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDiskInput"></a>

```go
func DataDiskInput() interface{}
```

- *Type:* interface{}

---

##### `DataDisksPersistenceModeInput`<sup>Optional</sup> <a name="DataDisksPersistenceModeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDisksPersistenceModeInput"></a>

```go
func DataDisksPersistenceModeInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.deleteInput"></a>

```go
func DeleteInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DetachDataDiskInput`<sup>Optional</sup> <a name="DetachDataDiskInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.detachDataDiskInput"></a>

```go
func DetachDataDiskInput() interface{}
```

- *Type:* interface{}

---

##### `ExtensionInput`<sup>Optional</sup> <a name="ExtensionInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.extensionInput"></a>

```go
func ExtensionInput() interface{}
```

- *Type:* interface{}

---

##### `HealthInput`<sup>Optional</sup> <a name="HealthInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.healthInput"></a>

```go
func HealthInput() StatefulNodeAzureHealth
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.imageInput"></a>

```go
func ImageInput() StatefulNodeAzureImage
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a>

---

##### `ImportVmInput`<sup>Optional</sup> <a name="ImportVmInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.importVmInput"></a>

```go
func ImportVmInput() interface{}
```

- *Type:* interface{}

---

##### `LoadBalancerInput`<sup>Optional</sup> <a name="LoadBalancerInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.loadBalancerInput"></a>

```go
func LoadBalancerInput() interface{}
```

- *Type:* interface{}

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.loginInput"></a>

```go
func LoginInput() StatefulNodeAzureLogin
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a>

---

##### `ManagedServiceIdentitiesInput`<sup>Optional</sup> <a name="ManagedServiceIdentitiesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.managedServiceIdentitiesInput"></a>

```go
func ManagedServiceIdentitiesInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.networkInput"></a>

```go
func NetworkInput() StatefulNodeAzureNetwork
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a>

---

##### `OdSizesInput`<sup>Optional</sup> <a name="OdSizesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.odSizesInput"></a>

```go
func OdSizesInput() *[]*string
```

- *Type:* *[]*string

---

##### `OsDiskInput`<sup>Optional</sup> <a name="OsDiskInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDiskInput"></a>

```go
func OsDiskInput() StatefulNodeAzureOsDisk
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a>

---

##### `OsDiskPersistenceModeInput`<sup>Optional</sup> <a name="OsDiskPersistenceModeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDiskPersistenceModeInput"></a>

```go
func OsDiskPersistenceModeInput() *string
```

- *Type:* *string

---

##### `OsInput`<sup>Optional</sup> <a name="OsInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osInput"></a>

```go
func OsInput() *string
```

- *Type:* *string

---

##### `PreferredSpotSizesInput`<sup>Optional</sup> <a name="PreferredSpotSizesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredSpotSizesInput"></a>

```go
func PreferredSpotSizesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PreferredZonesInput`<sup>Optional</sup> <a name="PreferredZonesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredZonesInput"></a>

```go
func PreferredZonesInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SchedulingTaskInput`<sup>Optional</sup> <a name="SchedulingTaskInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.schedulingTaskInput"></a>

```go
func SchedulingTaskInput() interface{}
```

- *Type:* interface{}

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.secretInput"></a>

```go
func SecretInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldPersistDataDisksInput`<sup>Optional</sup> <a name="ShouldPersistDataDisksInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistDataDisksInput"></a>

```go
func ShouldPersistDataDisksInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldPersistNetworkInput`<sup>Optional</sup> <a name="ShouldPersistNetworkInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistNetworkInput"></a>

```go
func ShouldPersistNetworkInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldPersistOsDiskInput`<sup>Optional</sup> <a name="ShouldPersistOsDiskInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistOsDiskInput"></a>

```go
func ShouldPersistOsDiskInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldPersistVmInput`<sup>Optional</sup> <a name="ShouldPersistVmInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistVmInput"></a>

```go
func ShouldPersistVmInput() interface{}
```

- *Type:* interface{}

---

##### `ShutdownScriptInput`<sup>Optional</sup> <a name="ShutdownScriptInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shutdownScriptInput"></a>

```go
func ShutdownScriptInput() *string
```

- *Type:* *string

---

##### `SignalInput`<sup>Optional</sup> <a name="SignalInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.signalInput"></a>

```go
func SignalInput() interface{}
```

- *Type:* interface{}

---

##### `SpotSizesInput`<sup>Optional</sup> <a name="SpotSizesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.spotSizesInput"></a>

```go
func SpotSizesInput() *[]*string
```

- *Type:* *[]*string

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.strategyInput"></a>

```go
func StrategyInput() StatefulNodeAzureStrategy
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a>

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.tagInput"></a>

```go
func TagInput() interface{}
```

- *Type:* interface{}

---

##### `UpdateStateInput`<sup>Optional</sup> <a name="UpdateStateInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.updateStateInput"></a>

```go
func UpdateStateInput() interface{}
```

- *Type:* interface{}

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.zonesInput"></a>

```go
func ZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomData`<sup>Required</sup> <a name="CustomData" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.customData"></a>

```go
func CustomData() *string
```

- *Type:* *string

---

##### `DataDisksPersistenceMode`<sup>Required</sup> <a name="DataDisksPersistenceMode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.dataDisksPersistenceMode"></a>

```go
func DataDisksPersistenceMode() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OdSizes`<sup>Required</sup> <a name="OdSizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.odSizes"></a>

```go
func OdSizes() *[]*string
```

- *Type:* *[]*string

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.os"></a>

```go
func Os() *string
```

- *Type:* *string

---

##### `OsDiskPersistenceMode`<sup>Required</sup> <a name="OsDiskPersistenceMode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.osDiskPersistenceMode"></a>

```go
func OsDiskPersistenceMode() *string
```

- *Type:* *string

---

##### `PreferredSpotSizes`<sup>Required</sup> <a name="PreferredSpotSizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredSpotSizes"></a>

```go
func PreferredSpotSizes() *[]*string
```

- *Type:* *[]*string

---

##### `PreferredZones`<sup>Required</sup> <a name="PreferredZones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.preferredZones"></a>

```go
func PreferredZones() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `ShouldPersistDataDisks`<sup>Required</sup> <a name="ShouldPersistDataDisks" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistDataDisks"></a>

```go
func ShouldPersistDataDisks() interface{}
```

- *Type:* interface{}

---

##### `ShouldPersistNetwork`<sup>Required</sup> <a name="ShouldPersistNetwork" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistNetwork"></a>

```go
func ShouldPersistNetwork() interface{}
```

- *Type:* interface{}

---

##### `ShouldPersistOsDisk`<sup>Required</sup> <a name="ShouldPersistOsDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistOsDisk"></a>

```go
func ShouldPersistOsDisk() interface{}
```

- *Type:* interface{}

---

##### `ShouldPersistVm`<sup>Required</sup> <a name="ShouldPersistVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shouldPersistVm"></a>

```go
func ShouldPersistVm() interface{}
```

- *Type:* interface{}

---

##### `ShutdownScript`<sup>Required</sup> <a name="ShutdownScript" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.shutdownScript"></a>

```go
func ShutdownScript() *string
```

- *Type:* *string

---

##### `SpotSizes`<sup>Required</sup> <a name="SpotSizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.spotSizes"></a>

```go
func SpotSizes() *[]*string
```

- *Type:* *[]*string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzure.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StatefulNodeAzureAttachDataDisk <a name="StatefulNodeAzureAttachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureAttachDataDisk {
	DataDiskName: *string,
	DataDiskResourceGroupName: *string,
	SizeGb: *f64,
	StorageAccountType: *string,
	Lun: *f64,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.dataDiskName">DataDiskName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#data_disk_name StatefulNodeAzure#data_disk_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.dataDiskResourceGroupName">DataDiskResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#data_disk_resource_group_name StatefulNodeAzure#data_disk_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.sizeGb">SizeGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.storageAccountType">StorageAccountType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#storage_account_type StatefulNodeAzure#storage_account_type}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.lun">Lun</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#lun StatefulNodeAzure#lun}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.zone">Zone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#zone StatefulNodeAzure#zone}. |

---

##### `DataDiskName`<sup>Required</sup> <a name="DataDiskName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.dataDiskName"></a>

```go
DataDiskName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#data_disk_name StatefulNodeAzure#data_disk_name}.

---

##### `DataDiskResourceGroupName`<sup>Required</sup> <a name="DataDiskResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.dataDiskResourceGroupName"></a>

```go
DataDiskResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#data_disk_resource_group_name StatefulNodeAzure#data_disk_resource_group_name}.

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.sizeGb"></a>

```go
SizeGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}.

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.storageAccountType"></a>

```go
StorageAccountType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#storage_account_type StatefulNodeAzure#storage_account_type}.

---

##### `Lun`<sup>Optional</sup> <a name="Lun" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.lun"></a>

```go
Lun *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#lun StatefulNodeAzure#lun}.

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDisk.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#zone StatefulNodeAzure#zone}.

---

### StatefulNodeAzureBootDiagnostics <a name="StatefulNodeAzureBootDiagnostics" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureBootDiagnostics {
	IsEnabled: interface{},
	StorageUrl: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#is_enabled StatefulNodeAzure#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.property.storageUrl">StorageUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#storage_url StatefulNodeAzure#storage_url}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#type StatefulNodeAzure#type}. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#is_enabled StatefulNodeAzure#is_enabled}.

---

##### `StorageUrl`<sup>Optional</sup> <a name="StorageUrl" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.property.storageUrl"></a>

```go
StorageUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#storage_url StatefulNodeAzure#storage_url}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnostics.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#type StatefulNodeAzure#type}.

---

### StatefulNodeAzureConfig <a name="StatefulNodeAzureConfig" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Image: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7.statefulNodeAzure.StatefulNodeAzureImage,
	Login: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7.statefulNodeAzure.StatefulNodeAzureLogin,
	Name: *string,
	Network: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7.statefulNodeAzure.StatefulNodeAzureNetwork,
	OdSizes: *[]*string,
	Os: *string,
	Region: *string,
	ResourceGroupName: *string,
	ShouldPersistDataDisks: interface{},
	ShouldPersistNetwork: interface{},
	ShouldPersistOsDisk: interface{},
	SpotSizes: *[]*string,
	Strategy: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7.statefulNodeAzure.StatefulNodeAzureStrategy,
	AttachDataDisk: interface{},
	BootDiagnostics: interface{},
	CustomData: *string,
	DataDisk: interface{},
	DataDisksPersistenceMode: *string,
	Delete: interface{},
	Description: *string,
	DetachDataDisk: interface{},
	Extension: interface{},
	Health: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7.statefulNodeAzure.StatefulNodeAzureHealth,
	Id: *string,
	ImportVm: interface{},
	LoadBalancer: interface{},
	ManagedServiceIdentities: interface{},
	OsDisk: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7.statefulNodeAzure.StatefulNodeAzureOsDisk,
	OsDiskPersistenceMode: *string,
	PreferredSpotSizes: *[]*string,
	PreferredZones: *string,
	SchedulingTask: interface{},
	Secret: interface{},
	ShouldPersistVm: interface{},
	ShutdownScript: *string,
	Signal: interface{},
	Tag: interface{},
	UpdateState: interface{},
	Zones: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.image">Image</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a></code> | image block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.login">Login</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a></code> | login block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.network">Network</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.odSizes">OdSizes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#od_sizes StatefulNodeAzure#od_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.os">Os</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#os StatefulNodeAzure#os}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#region StatefulNodeAzure#region}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistDataDisks">ShouldPersistDataDisks</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#should_persist_data_disks StatefulNodeAzure#should_persist_data_disks}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistNetwork">ShouldPersistNetwork</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#should_persist_network StatefulNodeAzure#should_persist_network}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistOsDisk">ShouldPersistOsDisk</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#should_persist_os_disk StatefulNodeAzure#should_persist_os_disk}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.spotSizes">SpotSizes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#spot_sizes StatefulNodeAzure#spot_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.strategy">Strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a></code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.attachDataDisk">AttachDataDisk</a></code> | <code>interface{}</code> | attach_data_disk block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.bootDiagnostics">BootDiagnostics</a></code> | <code>interface{}</code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.customData">CustomData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#custom_data StatefulNodeAzure#custom_data}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.dataDisk">DataDisk</a></code> | <code>interface{}</code> | data_disk block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.dataDisksPersistenceMode">DataDisksPersistenceMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#data_disks_persistence_mode StatefulNodeAzure#data_disks_persistence_mode}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.delete">Delete</a></code> | <code>interface{}</code> | delete block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#description StatefulNodeAzure#description}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.detachDataDisk">DetachDataDisk</a></code> | <code>interface{}</code> | detach_data_disk block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.extension">Extension</a></code> | <code>interface{}</code> | extension block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.health">Health</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#id StatefulNodeAzure#id}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.importVm">ImportVm</a></code> | <code>interface{}</code> | import_vm block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.loadBalancer">LoadBalancer</a></code> | <code>interface{}</code> | load_balancer block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.managedServiceIdentities">ManagedServiceIdentities</a></code> | <code>interface{}</code> | managed_service_identities block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.osDisk">OsDisk</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.osDiskPersistenceMode">OsDiskPersistenceMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#os_disk_persistence_mode StatefulNodeAzure#os_disk_persistence_mode}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.preferredSpotSizes">PreferredSpotSizes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#preferred_spot_sizes StatefulNodeAzure#preferred_spot_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.preferredZones">PreferredZones</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#preferred_zones StatefulNodeAzure#preferred_zones}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.schedulingTask">SchedulingTask</a></code> | <code>interface{}</code> | scheduling_task block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.secret">Secret</a></code> | <code>interface{}</code> | secret block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistVm">ShouldPersistVm</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#should_persist_vm StatefulNodeAzure#should_persist_vm}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shutdownScript">ShutdownScript</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#shutdown_script StatefulNodeAzure#shutdown_script}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.signal">Signal</a></code> | <code>interface{}</code> | signal block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.tag">Tag</a></code> | <code>interface{}</code> | tag block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.updateState">UpdateState</a></code> | <code>interface{}</code> | update_state block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.zones">Zones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#zones StatefulNodeAzure#zones}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.image"></a>

```go
Image StatefulNodeAzureImage
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#image StatefulNodeAzure#image}

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.login"></a>

```go
Login StatefulNodeAzureLogin
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a>

login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#login StatefulNodeAzure#login}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.network"></a>

```go
Network StatefulNodeAzureNetwork
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#network StatefulNodeAzure#network}

---

##### `OdSizes`<sup>Required</sup> <a name="OdSizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.odSizes"></a>

```go
OdSizes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#od_sizes StatefulNodeAzure#od_sizes}.

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.os"></a>

```go
Os *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#os StatefulNodeAzure#os}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#region StatefulNodeAzure#region}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}.

---

##### `ShouldPersistDataDisks`<sup>Required</sup> <a name="ShouldPersistDataDisks" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistDataDisks"></a>

```go
ShouldPersistDataDisks interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#should_persist_data_disks StatefulNodeAzure#should_persist_data_disks}.

---

##### `ShouldPersistNetwork`<sup>Required</sup> <a name="ShouldPersistNetwork" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistNetwork"></a>

```go
ShouldPersistNetwork interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#should_persist_network StatefulNodeAzure#should_persist_network}.

---

##### `ShouldPersistOsDisk`<sup>Required</sup> <a name="ShouldPersistOsDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistOsDisk"></a>

```go
ShouldPersistOsDisk interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#should_persist_os_disk StatefulNodeAzure#should_persist_os_disk}.

---

##### `SpotSizes`<sup>Required</sup> <a name="SpotSizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.spotSizes"></a>

```go
SpotSizes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#spot_sizes StatefulNodeAzure#spot_sizes}.

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.strategy"></a>

```go
Strategy StatefulNodeAzureStrategy
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#strategy StatefulNodeAzure#strategy}

---

##### `AttachDataDisk`<sup>Optional</sup> <a name="AttachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.attachDataDisk"></a>

```go
AttachDataDisk interface{}
```

- *Type:* interface{}

attach_data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#attach_data_disk StatefulNodeAzure#attach_data_disk}

---

##### `BootDiagnostics`<sup>Optional</sup> <a name="BootDiagnostics" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.bootDiagnostics"></a>

```go
BootDiagnostics interface{}
```

- *Type:* interface{}

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#boot_diagnostics StatefulNodeAzure#boot_diagnostics}

---

##### `CustomData`<sup>Optional</sup> <a name="CustomData" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.customData"></a>

```go
CustomData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#custom_data StatefulNodeAzure#custom_data}.

---

##### `DataDisk`<sup>Optional</sup> <a name="DataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.dataDisk"></a>

```go
DataDisk interface{}
```

- *Type:* interface{}

data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#data_disk StatefulNodeAzure#data_disk}

---

##### `DataDisksPersistenceMode`<sup>Optional</sup> <a name="DataDisksPersistenceMode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.dataDisksPersistenceMode"></a>

```go
DataDisksPersistenceMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#data_disks_persistence_mode StatefulNodeAzure#data_disks_persistence_mode}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.delete"></a>

```go
Delete interface{}
```

- *Type:* interface{}

delete block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#delete StatefulNodeAzure#delete}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#description StatefulNodeAzure#description}.

---

##### `DetachDataDisk`<sup>Optional</sup> <a name="DetachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.detachDataDisk"></a>

```go
DetachDataDisk interface{}
```

- *Type:* interface{}

detach_data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#detach_data_disk StatefulNodeAzure#detach_data_disk}

---

##### `Extension`<sup>Optional</sup> <a name="Extension" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.extension"></a>

```go
Extension interface{}
```

- *Type:* interface{}

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#extension StatefulNodeAzure#extension}

---

##### `Health`<sup>Optional</sup> <a name="Health" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.health"></a>

```go
Health StatefulNodeAzureHealth
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a>

health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#health StatefulNodeAzure#health}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#id StatefulNodeAzure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportVm`<sup>Optional</sup> <a name="ImportVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.importVm"></a>

```go
ImportVm interface{}
```

- *Type:* interface{}

import_vm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#import_vm StatefulNodeAzure#import_vm}

---

##### `LoadBalancer`<sup>Optional</sup> <a name="LoadBalancer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.loadBalancer"></a>

```go
LoadBalancer interface{}
```

- *Type:* interface{}

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#load_balancer StatefulNodeAzure#load_balancer}

---

##### `ManagedServiceIdentities`<sup>Optional</sup> <a name="ManagedServiceIdentities" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.managedServiceIdentities"></a>

```go
ManagedServiceIdentities interface{}
```

- *Type:* interface{}

managed_service_identities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#managed_service_identities StatefulNodeAzure#managed_service_identities}

---

##### `OsDisk`<sup>Optional</sup> <a name="OsDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.osDisk"></a>

```go
OsDisk StatefulNodeAzureOsDisk
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#os_disk StatefulNodeAzure#os_disk}

---

##### `OsDiskPersistenceMode`<sup>Optional</sup> <a name="OsDiskPersistenceMode" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.osDiskPersistenceMode"></a>

```go
OsDiskPersistenceMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#os_disk_persistence_mode StatefulNodeAzure#os_disk_persistence_mode}.

---

##### `PreferredSpotSizes`<sup>Optional</sup> <a name="PreferredSpotSizes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.preferredSpotSizes"></a>

```go
PreferredSpotSizes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#preferred_spot_sizes StatefulNodeAzure#preferred_spot_sizes}.

---

##### `PreferredZones`<sup>Optional</sup> <a name="PreferredZones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.preferredZones"></a>

```go
PreferredZones *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#preferred_zones StatefulNodeAzure#preferred_zones}.

---

##### `SchedulingTask`<sup>Optional</sup> <a name="SchedulingTask" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.schedulingTask"></a>

```go
SchedulingTask interface{}
```

- *Type:* interface{}

scheduling_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#scheduling_task StatefulNodeAzure#scheduling_task}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.secret"></a>

```go
Secret interface{}
```

- *Type:* interface{}

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#secret StatefulNodeAzure#secret}

---

##### `ShouldPersistVm`<sup>Optional</sup> <a name="ShouldPersistVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shouldPersistVm"></a>

```go
ShouldPersistVm interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#should_persist_vm StatefulNodeAzure#should_persist_vm}.

---

##### `ShutdownScript`<sup>Optional</sup> <a name="ShutdownScript" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.shutdownScript"></a>

```go
ShutdownScript *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#shutdown_script StatefulNodeAzure#shutdown_script}.

---

##### `Signal`<sup>Optional</sup> <a name="Signal" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.signal"></a>

```go
Signal interface{}
```

- *Type:* interface{}

signal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#signal StatefulNodeAzure#signal}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.tag"></a>

```go
Tag interface{}
```

- *Type:* interface{}

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#tag StatefulNodeAzure#tag}

---

##### `UpdateState`<sup>Optional</sup> <a name="UpdateState" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.updateState"></a>

```go
UpdateState interface{}
```

- *Type:* interface{}

update_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#update_state StatefulNodeAzure#update_state}

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureConfig.property.zones"></a>

```go
Zones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#zones StatefulNodeAzure#zones}.

---

### StatefulNodeAzureDataDisk <a name="StatefulNodeAzureDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureDataDisk {
	Lun: *f64,
	SizeGb: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.property.lun">Lun</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#lun StatefulNodeAzure#lun}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.property.sizeGb">SizeGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#type StatefulNodeAzure#type}. |

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.property.lun"></a>

```go
Lun *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#lun StatefulNodeAzure#lun}.

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.property.sizeGb"></a>

```go
SizeGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDisk.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#type StatefulNodeAzure#type}.

---

### StatefulNodeAzureDelete <a name="StatefulNodeAzureDelete" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureDelete {
	DiskShouldDeallocate: interface{},
	NetworkShouldDeallocate: interface{},
	PublicIpShouldDeallocate: interface{},
	ShouldTerminateVm: interface{},
	SnapshotShouldDeallocate: interface{},
	DiskTtlInHours: *f64,
	NetworkTtlInHours: *f64,
	PublicIpTtlInHours: *f64,
	SnapshotTtlInHours: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.diskShouldDeallocate">DiskShouldDeallocate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#disk_should_deallocate StatefulNodeAzure#disk_should_deallocate}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.networkShouldDeallocate">NetworkShouldDeallocate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#network_should_deallocate StatefulNodeAzure#network_should_deallocate}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.publicIpShouldDeallocate">PublicIpShouldDeallocate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#public_ip_should_deallocate StatefulNodeAzure#public_ip_should_deallocate}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.shouldTerminateVm">ShouldTerminateVm</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#should_terminate_vm StatefulNodeAzure#should_terminate_vm}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.snapshotShouldDeallocate">SnapshotShouldDeallocate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#snapshot_should_deallocate StatefulNodeAzure#snapshot_should_deallocate}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.diskTtlInHours">DiskTtlInHours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#disk_ttl_in_hours StatefulNodeAzure#disk_ttl_in_hours}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.networkTtlInHours">NetworkTtlInHours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#network_ttl_in_hours StatefulNodeAzure#network_ttl_in_hours}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.publicIpTtlInHours">PublicIpTtlInHours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#public_ip_ttl_in_hours StatefulNodeAzure#public_ip_ttl_in_hours}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.snapshotTtlInHours">SnapshotTtlInHours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#snapshot_ttl_in_hours StatefulNodeAzure#snapshot_ttl_in_hours}. |

---

##### `DiskShouldDeallocate`<sup>Required</sup> <a name="DiskShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.diskShouldDeallocate"></a>

```go
DiskShouldDeallocate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#disk_should_deallocate StatefulNodeAzure#disk_should_deallocate}.

---

##### `NetworkShouldDeallocate`<sup>Required</sup> <a name="NetworkShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.networkShouldDeallocate"></a>

```go
NetworkShouldDeallocate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#network_should_deallocate StatefulNodeAzure#network_should_deallocate}.

---

##### `PublicIpShouldDeallocate`<sup>Required</sup> <a name="PublicIpShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.publicIpShouldDeallocate"></a>

```go
PublicIpShouldDeallocate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#public_ip_should_deallocate StatefulNodeAzure#public_ip_should_deallocate}.

---

##### `ShouldTerminateVm`<sup>Required</sup> <a name="ShouldTerminateVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.shouldTerminateVm"></a>

```go
ShouldTerminateVm interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#should_terminate_vm StatefulNodeAzure#should_terminate_vm}.

---

##### `SnapshotShouldDeallocate`<sup>Required</sup> <a name="SnapshotShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.snapshotShouldDeallocate"></a>

```go
SnapshotShouldDeallocate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#snapshot_should_deallocate StatefulNodeAzure#snapshot_should_deallocate}.

---

##### `DiskTtlInHours`<sup>Optional</sup> <a name="DiskTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.diskTtlInHours"></a>

```go
DiskTtlInHours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#disk_ttl_in_hours StatefulNodeAzure#disk_ttl_in_hours}.

---

##### `NetworkTtlInHours`<sup>Optional</sup> <a name="NetworkTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.networkTtlInHours"></a>

```go
NetworkTtlInHours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#network_ttl_in_hours StatefulNodeAzure#network_ttl_in_hours}.

---

##### `PublicIpTtlInHours`<sup>Optional</sup> <a name="PublicIpTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.publicIpTtlInHours"></a>

```go
PublicIpTtlInHours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#public_ip_ttl_in_hours StatefulNodeAzure#public_ip_ttl_in_hours}.

---

##### `SnapshotTtlInHours`<sup>Optional</sup> <a name="SnapshotTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDelete.property.snapshotTtlInHours"></a>

```go
SnapshotTtlInHours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#snapshot_ttl_in_hours StatefulNodeAzure#snapshot_ttl_in_hours}.

---

### StatefulNodeAzureDetachDataDisk <a name="StatefulNodeAzureDetachDataDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureDetachDataDisk {
	DataDiskName: *string,
	DataDiskResourceGroupName: *string,
	ShouldDeallocate: interface{},
	TtlInHours: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.dataDiskName">DataDiskName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#data_disk_name StatefulNodeAzure#data_disk_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.dataDiskResourceGroupName">DataDiskResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#data_disk_resource_group_name StatefulNodeAzure#data_disk_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.shouldDeallocate">ShouldDeallocate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#should_deallocate StatefulNodeAzure#should_deallocate}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.ttlInHours">TtlInHours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#ttl_in_hours StatefulNodeAzure#ttl_in_hours}. |

---

##### `DataDiskName`<sup>Required</sup> <a name="DataDiskName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.dataDiskName"></a>

```go
DataDiskName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#data_disk_name StatefulNodeAzure#data_disk_name}.

---

##### `DataDiskResourceGroupName`<sup>Required</sup> <a name="DataDiskResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.dataDiskResourceGroupName"></a>

```go
DataDiskResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#data_disk_resource_group_name StatefulNodeAzure#data_disk_resource_group_name}.

---

##### `ShouldDeallocate`<sup>Required</sup> <a name="ShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.shouldDeallocate"></a>

```go
ShouldDeallocate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#should_deallocate StatefulNodeAzure#should_deallocate}.

---

##### `TtlInHours`<sup>Optional</sup> <a name="TtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDisk.property.ttlInHours"></a>

```go
TtlInHours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#ttl_in_hours StatefulNodeAzure#ttl_in_hours}.

---

### StatefulNodeAzureExtension <a name="StatefulNodeAzureExtension" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureExtension {
	ApiVersion: *string,
	MinorVersionAutoUpgrade: interface{},
	Name: *string,
	Publisher: *string,
	Type: *string,
	ProtectedSettings: *map[string]*string,
	PublicSettings: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.apiVersion">ApiVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#api_version StatefulNodeAzure#api_version}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.minorVersionAutoUpgrade">MinorVersionAutoUpgrade</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#minor_version_auto_upgrade StatefulNodeAzure#minor_version_auto_upgrade}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.publisher">Publisher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#publisher StatefulNodeAzure#publisher}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#type StatefulNodeAzure#type}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.protectedSettings">ProtectedSettings</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#protected_settings StatefulNodeAzure#protected_settings}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.publicSettings">PublicSettings</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#public_settings StatefulNodeAzure#public_settings}. |

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.apiVersion"></a>

```go
ApiVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#api_version StatefulNodeAzure#api_version}.

---

##### `MinorVersionAutoUpgrade`<sup>Required</sup> <a name="MinorVersionAutoUpgrade" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.minorVersionAutoUpgrade"></a>

```go
MinorVersionAutoUpgrade interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#minor_version_auto_upgrade StatefulNodeAzure#minor_version_auto_upgrade}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.publisher"></a>

```go
Publisher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#publisher StatefulNodeAzure#publisher}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#type StatefulNodeAzure#type}.

---

##### `ProtectedSettings`<sup>Optional</sup> <a name="ProtectedSettings" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.protectedSettings"></a>

```go
ProtectedSettings *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#protected_settings StatefulNodeAzure#protected_settings}.

---

##### `PublicSettings`<sup>Optional</sup> <a name="PublicSettings" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtension.property.publicSettings"></a>

```go
PublicSettings *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#public_settings StatefulNodeAzure#public_settings}.

---

### StatefulNodeAzureHealth <a name="StatefulNodeAzureHealth" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureHealth {
	AutoHealing: interface{},
	HealthCheckTypes: *[]*string,
	GracePeriod: *f64,
	UnhealthyDuration: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.autoHealing">AutoHealing</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#auto_healing StatefulNodeAzure#auto_healing}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.healthCheckTypes">HealthCheckTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#health_check_types StatefulNodeAzure#health_check_types}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.gracePeriod">GracePeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#grace_period StatefulNodeAzure#grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.unhealthyDuration">UnhealthyDuration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#unhealthy_duration StatefulNodeAzure#unhealthy_duration}. |

---

##### `AutoHealing`<sup>Required</sup> <a name="AutoHealing" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.autoHealing"></a>

```go
AutoHealing interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#auto_healing StatefulNodeAzure#auto_healing}.

---

##### `HealthCheckTypes`<sup>Required</sup> <a name="HealthCheckTypes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.healthCheckTypes"></a>

```go
HealthCheckTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#health_check_types StatefulNodeAzure#health_check_types}.

---

##### `GracePeriod`<sup>Optional</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.gracePeriod"></a>

```go
GracePeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#grace_period StatefulNodeAzure#grace_period}.

---

##### `UnhealthyDuration`<sup>Optional</sup> <a name="UnhealthyDuration" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth.property.unhealthyDuration"></a>

```go
UnhealthyDuration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#unhealthy_duration StatefulNodeAzure#unhealthy_duration}.

---

### StatefulNodeAzureImage <a name="StatefulNodeAzureImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureImage {
	CustomImage: interface{},
	Gallery: interface{},
	MarketplaceImage: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.property.customImage">CustomImage</a></code> | <code>interface{}</code> | custom_image block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.property.gallery">Gallery</a></code> | <code>interface{}</code> | gallery block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.property.marketplaceImage">MarketplaceImage</a></code> | <code>interface{}</code> | marketplace_image block. |

---

##### `CustomImage`<sup>Optional</sup> <a name="CustomImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.property.customImage"></a>

```go
CustomImage interface{}
```

- *Type:* interface{}

custom_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#custom_image StatefulNodeAzure#custom_image}

---

##### `Gallery`<sup>Optional</sup> <a name="Gallery" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.property.gallery"></a>

```go
Gallery interface{}
```

- *Type:* interface{}

gallery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#gallery StatefulNodeAzure#gallery}

---

##### `MarketplaceImage`<sup>Optional</sup> <a name="MarketplaceImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage.property.marketplaceImage"></a>

```go
MarketplaceImage interface{}
```

- *Type:* interface{}

marketplace_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#marketplace_image StatefulNodeAzure#marketplace_image}

---

### StatefulNodeAzureImageCustomImage <a name="StatefulNodeAzureImageCustomImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureImageCustomImage {
	CustomImageResourceGroupName: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage.property.customImageResourceGroupName">CustomImageResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#custom_image_resource_group_name StatefulNodeAzure#custom_image_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}. |

---

##### `CustomImageResourceGroupName`<sup>Required</sup> <a name="CustomImageResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage.property.customImageResourceGroupName"></a>

```go
CustomImageResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#custom_image_resource_group_name StatefulNodeAzure#custom_image_resource_group_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImage.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}.

---

### StatefulNodeAzureImageGallery <a name="StatefulNodeAzureImageGallery" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureImageGallery {
	GalleryName: *string,
	GalleryResourceGroupName: *string,
	ImageName: *string,
	VersionName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.galleryName">GalleryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#gallery_name StatefulNodeAzure#gallery_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.galleryResourceGroupName">GalleryResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#gallery_resource_group_name StatefulNodeAzure#gallery_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.imageName">ImageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#image_name StatefulNodeAzure#image_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.versionName">VersionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#version_name StatefulNodeAzure#version_name}. |

---

##### `GalleryName`<sup>Required</sup> <a name="GalleryName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.galleryName"></a>

```go
GalleryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#gallery_name StatefulNodeAzure#gallery_name}.

---

##### `GalleryResourceGroupName`<sup>Required</sup> <a name="GalleryResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.galleryResourceGroupName"></a>

```go
GalleryResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#gallery_resource_group_name StatefulNodeAzure#gallery_resource_group_name}.

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.imageName"></a>

```go
ImageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#image_name StatefulNodeAzure#image_name}.

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGallery.property.versionName"></a>

```go
VersionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#version_name StatefulNodeAzure#version_name}.

---

### StatefulNodeAzureImageMarketplaceImage <a name="StatefulNodeAzureImageMarketplaceImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureImageMarketplaceImage {
	Offer: *string,
	Publisher: *string,
	Sku: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.offer">Offer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#offer StatefulNodeAzure#offer}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.publisher">Publisher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#publisher StatefulNodeAzure#publisher}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.sku">Sku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#sku StatefulNodeAzure#sku}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#version StatefulNodeAzure#version}. |

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.offer"></a>

```go
Offer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#offer StatefulNodeAzure#offer}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.publisher"></a>

```go
Publisher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#publisher StatefulNodeAzure#publisher}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.sku"></a>

```go
Sku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#sku StatefulNodeAzure#sku}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImage.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#version StatefulNodeAzure#version}.

---

### StatefulNodeAzureImportVm <a name="StatefulNodeAzureImportVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureImportVm {
	OriginalVmName: *string,
	ResourceGroupName: *string,
	DrainingTimeout: *f64,
	ResourcesRetentionTime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.originalVmName">OriginalVmName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#original_vm_name StatefulNodeAzure#original_vm_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.drainingTimeout">DrainingTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#draining_timeout StatefulNodeAzure#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.resourcesRetentionTime">ResourcesRetentionTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#resources_retention_time StatefulNodeAzure#resources_retention_time}. |

---

##### `OriginalVmName`<sup>Required</sup> <a name="OriginalVmName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.originalVmName"></a>

```go
OriginalVmName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#original_vm_name StatefulNodeAzure#original_vm_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}.

---

##### `DrainingTimeout`<sup>Optional</sup> <a name="DrainingTimeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.drainingTimeout"></a>

```go
DrainingTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#draining_timeout StatefulNodeAzure#draining_timeout}.

---

##### `ResourcesRetentionTime`<sup>Optional</sup> <a name="ResourcesRetentionTime" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVm.property.resourcesRetentionTime"></a>

```go
ResourcesRetentionTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#resources_retention_time StatefulNodeAzure#resources_retention_time}.

---

### StatefulNodeAzureLoadBalancer <a name="StatefulNodeAzureLoadBalancer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureLoadBalancer {
	BackendPoolNames: *[]*string,
	Name: *string,
	ResourceGroupName: *string,
	Type: *string,
	Sku: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.backendPoolNames">BackendPoolNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#backend_pool_names StatefulNodeAzure#backend_pool_names}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#type StatefulNodeAzure#type}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.sku">Sku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#sku StatefulNodeAzure#sku}. |

---

##### `BackendPoolNames`<sup>Required</sup> <a name="BackendPoolNames" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.backendPoolNames"></a>

```go
BackendPoolNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#backend_pool_names StatefulNodeAzure#backend_pool_names}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#type StatefulNodeAzure#type}.

---

##### `Sku`<sup>Optional</sup> <a name="Sku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancer.property.sku"></a>

```go
Sku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#sku StatefulNodeAzure#sku}.

---

### StatefulNodeAzureLogin <a name="StatefulNodeAzureLogin" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureLogin {
	UserName: *string,
	Password: *string,
	SshPublicKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#user_name StatefulNodeAzure#user_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#password StatefulNodeAzure#password}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.property.sshPublicKey">SshPublicKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#ssh_public_key StatefulNodeAzure#ssh_public_key}. |

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#user_name StatefulNodeAzure#user_name}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#password StatefulNodeAzure#password}.

---

##### `SshPublicKey`<sup>Optional</sup> <a name="SshPublicKey" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin.property.sshPublicKey"></a>

```go
SshPublicKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#ssh_public_key StatefulNodeAzure#ssh_public_key}.

---

### StatefulNodeAzureManagedServiceIdentities <a name="StatefulNodeAzureManagedServiceIdentities" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureManagedServiceIdentities {
	Name: *string,
	ResourceGroupName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentities.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}.

---

### StatefulNodeAzureNetwork <a name="StatefulNodeAzureNetwork" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureNetwork {
	NetworkInterface: interface{},
	NetworkResourceGroupName: *string,
	VirtualNetworkName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.property.networkInterface">NetworkInterface</a></code> | <code>interface{}</code> | network_interface block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.property.networkResourceGroupName">NetworkResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.property.virtualNetworkName">VirtualNetworkName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#virtual_network_name StatefulNodeAzure#virtual_network_name}. |

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.property.networkInterface"></a>

```go
NetworkInterface interface{}
```

- *Type:* interface{}

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#network_interface StatefulNodeAzure#network_interface}

---

##### `NetworkResourceGroupName`<sup>Required</sup> <a name="NetworkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.property.networkResourceGroupName"></a>

```go
NetworkResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}.

---

##### `VirtualNetworkName`<sup>Required</sup> <a name="VirtualNetworkName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork.property.virtualNetworkName"></a>

```go
VirtualNetworkName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#virtual_network_name StatefulNodeAzure#virtual_network_name}.

---

### StatefulNodeAzureNetworkNetworkInterface <a name="StatefulNodeAzureNetworkNetworkInterface" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureNetworkNetworkInterface {
	IsPrimary: interface{},
	SubnetName: *string,
	AdditionalIpConfigurations: interface{},
	ApplicationSecurityGroups: interface{},
	AssignPublicIp: interface{},
	EnableIpForwarding: interface{},
	NetworkSecurityGroup: interface{},
	PrivateIpAddresses: *[]*string,
	PublicIps: interface{},
	PublicIpSku: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.isPrimary">IsPrimary</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#is_primary StatefulNodeAzure#is_primary}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.subnetName">SubnetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#subnet_name StatefulNodeAzure#subnet_name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.additionalIpConfigurations">AdditionalIpConfigurations</a></code> | <code>interface{}</code> | additional_ip_configurations block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.applicationSecurityGroups">ApplicationSecurityGroups</a></code> | <code>interface{}</code> | application_security_groups block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.assignPublicIp">AssignPublicIp</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#assign_public_ip StatefulNodeAzure#assign_public_ip}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.enableIpForwarding">EnableIpForwarding</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#enable_ip_forwarding StatefulNodeAzure#enable_ip_forwarding}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.networkSecurityGroup">NetworkSecurityGroup</a></code> | <code>interface{}</code> | network_security_group block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.privateIpAddresses">PrivateIpAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#private_ip_addresses StatefulNodeAzure#private_ip_addresses}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.publicIps">PublicIps</a></code> | <code>interface{}</code> | public_ips block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.publicIpSku">PublicIpSku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#public_ip_sku StatefulNodeAzure#public_ip_sku}. |

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.isPrimary"></a>

```go
IsPrimary interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#is_primary StatefulNodeAzure#is_primary}.

---

##### `SubnetName`<sup>Required</sup> <a name="SubnetName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.subnetName"></a>

```go
SubnetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#subnet_name StatefulNodeAzure#subnet_name}.

---

##### `AdditionalIpConfigurations`<sup>Optional</sup> <a name="AdditionalIpConfigurations" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.additionalIpConfigurations"></a>

```go
AdditionalIpConfigurations interface{}
```

- *Type:* interface{}

additional_ip_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#additional_ip_configurations StatefulNodeAzure#additional_ip_configurations}

---

##### `ApplicationSecurityGroups`<sup>Optional</sup> <a name="ApplicationSecurityGroups" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.applicationSecurityGroups"></a>

```go
ApplicationSecurityGroups interface{}
```

- *Type:* interface{}

application_security_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#application_security_groups StatefulNodeAzure#application_security_groups}

---

##### `AssignPublicIp`<sup>Optional</sup> <a name="AssignPublicIp" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.assignPublicIp"></a>

```go
AssignPublicIp interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#assign_public_ip StatefulNodeAzure#assign_public_ip}.

---

##### `EnableIpForwarding`<sup>Optional</sup> <a name="EnableIpForwarding" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.enableIpForwarding"></a>

```go
EnableIpForwarding interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#enable_ip_forwarding StatefulNodeAzure#enable_ip_forwarding}.

---

##### `NetworkSecurityGroup`<sup>Optional</sup> <a name="NetworkSecurityGroup" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.networkSecurityGroup"></a>

```go
NetworkSecurityGroup interface{}
```

- *Type:* interface{}

network_security_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#network_security_group StatefulNodeAzure#network_security_group}

---

##### `PrivateIpAddresses`<sup>Optional</sup> <a name="PrivateIpAddresses" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.privateIpAddresses"></a>

```go
PrivateIpAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#private_ip_addresses StatefulNodeAzure#private_ip_addresses}.

---

##### `PublicIps`<sup>Optional</sup> <a name="PublicIps" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.publicIps"></a>

```go
PublicIps interface{}
```

- *Type:* interface{}

public_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#public_ips StatefulNodeAzure#public_ips}

---

##### `PublicIpSku`<sup>Optional</sup> <a name="PublicIpSku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterface.property.publicIpSku"></a>

```go
PublicIpSku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#public_ip_sku StatefulNodeAzure#public_ip_sku}.

---

### StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations <a name="StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations {
	Name: *string,
	PrivateIpAddressVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations.property.privateIpAddressVersion">PrivateIpAddressVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#private_ip_address_version StatefulNodeAzure#private_ip_address_version}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `PrivateIpAddressVersion`<sup>Required</sup> <a name="PrivateIpAddressVersion" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurations.property.privateIpAddressVersion"></a>

```go
PrivateIpAddressVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#private_ip_address_version StatefulNodeAzure#private_ip_address_version}.

---

### StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups <a name="StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups {
	Name: *string,
	NetworkResourceGroupName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups.property.networkResourceGroupName">NetworkResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `NetworkResourceGroupName`<sup>Required</sup> <a name="NetworkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroups.property.networkResourceGroupName"></a>

```go
NetworkResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}.

---

### StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup <a name="StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup {
	Name: *string,
	NetworkResourceGroupName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup.property.networkResourceGroupName">NetworkResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `NetworkResourceGroupName`<sup>Optional</sup> <a name="NetworkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroup.property.networkResourceGroupName"></a>

```go
NetworkResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}.

---

### StatefulNodeAzureNetworkNetworkInterfacePublicIps <a name="StatefulNodeAzureNetworkNetworkInterfacePublicIps" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureNetworkNetworkInterfacePublicIps {
	Name: *string,
	NetworkResourceGroupName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps.property.networkResourceGroupName">NetworkResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `NetworkResourceGroupName`<sup>Required</sup> <a name="NetworkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIps.property.networkResourceGroupName"></a>

```go
NetworkResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#network_resource_group_name StatefulNodeAzure#network_resource_group_name}.

---

### StatefulNodeAzureOsDisk <a name="StatefulNodeAzureOsDisk" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureOsDisk {
	Type: *string,
	SizeGb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#type StatefulNodeAzure#type}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk.property.sizeGb">SizeGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#type StatefulNodeAzure#type}.

---

##### `SizeGb`<sup>Optional</sup> <a name="SizeGb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk.property.sizeGb"></a>

```go
SizeGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#size_gb StatefulNodeAzure#size_gb}.

---

### StatefulNodeAzureSchedulingTask <a name="StatefulNodeAzureSchedulingTask" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureSchedulingTask {
	CronExpression: *string,
	IsEnabled: interface{},
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.property.cronExpression">CronExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#cron_expression StatefulNodeAzure#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#is_enabled StatefulNodeAzure#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#type StatefulNodeAzure#type}. |

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.property.cronExpression"></a>

```go
CronExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#cron_expression StatefulNodeAzure#cron_expression}.

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#is_enabled StatefulNodeAzure#is_enabled}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTask.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#type StatefulNodeAzure#type}.

---

### StatefulNodeAzureSecret <a name="StatefulNodeAzureSecret" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureSecret {
	SourceVault: interface{},
	VaultCertificates: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret.property.sourceVault">SourceVault</a></code> | <code>interface{}</code> | source_vault block. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret.property.vaultCertificates">VaultCertificates</a></code> | <code>interface{}</code> | vault_certificates block. |

---

##### `SourceVault`<sup>Required</sup> <a name="SourceVault" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret.property.sourceVault"></a>

```go
SourceVault interface{}
```

- *Type:* interface{}

source_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#source_vault StatefulNodeAzure#source_vault}

---

##### `VaultCertificates`<sup>Required</sup> <a name="VaultCertificates" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecret.property.vaultCertificates"></a>

```go
VaultCertificates interface{}
```

- *Type:* interface{}

vault_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#vault_certificates StatefulNodeAzure#vault_certificates}

---

### StatefulNodeAzureSecretSourceVault <a name="StatefulNodeAzureSecretSourceVault" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureSecretSourceVault {
	Name: *string,
	ResourceGroupName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#name StatefulNodeAzure#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVault.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#resource_group_name StatefulNodeAzure#resource_group_name}.

---

### StatefulNodeAzureSecretVaultCertificates <a name="StatefulNodeAzureSecretVaultCertificates" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureSecretVaultCertificates {
	CertificateStore: *string,
	CertificateUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates.property.certificateStore">CertificateStore</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#certificate_store StatefulNodeAzure#certificate_store}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates.property.certificateUrl">CertificateUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#certificate_url StatefulNodeAzure#certificate_url}. |

---

##### `CertificateStore`<sup>Optional</sup> <a name="CertificateStore" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates.property.certificateStore"></a>

```go
CertificateStore *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#certificate_store StatefulNodeAzure#certificate_store}.

---

##### `CertificateUrl`<sup>Optional</sup> <a name="CertificateUrl" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificates.property.certificateUrl"></a>

```go
CertificateUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#certificate_url StatefulNodeAzure#certificate_url}.

---

### StatefulNodeAzureSignal <a name="StatefulNodeAzureSignal" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureSignal {
	Timeout: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal.property.timeout">Timeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#timeout StatefulNodeAzure#timeout}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#type StatefulNodeAzure#type}. |

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#timeout StatefulNodeAzure#timeout}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignal.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#type StatefulNodeAzure#type}.

---

### StatefulNodeAzureStrategy <a name="StatefulNodeAzureStrategy" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureStrategy {
	FallbackToOnDemand: interface{},
	DrainingTimeout: *f64,
	OptimizationWindows: *[]*string,
	PreferredLifeCycle: *string,
	RevertToSpot: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.fallbackToOnDemand">FallbackToOnDemand</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#fallback_to_on_demand StatefulNodeAzure#fallback_to_on_demand}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.drainingTimeout">DrainingTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#draining_timeout StatefulNodeAzure#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.optimizationWindows">OptimizationWindows</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#optimization_windows StatefulNodeAzure#optimization_windows}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.preferredLifeCycle">PreferredLifeCycle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#preferred_life_cycle StatefulNodeAzure#preferred_life_cycle}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.revertToSpot">RevertToSpot</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a></code> | revert_to_spot block. |

---

##### `FallbackToOnDemand`<sup>Required</sup> <a name="FallbackToOnDemand" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.fallbackToOnDemand"></a>

```go
FallbackToOnDemand interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#fallback_to_on_demand StatefulNodeAzure#fallback_to_on_demand}.

---

##### `DrainingTimeout`<sup>Optional</sup> <a name="DrainingTimeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.drainingTimeout"></a>

```go
DrainingTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#draining_timeout StatefulNodeAzure#draining_timeout}.

---

##### `OptimizationWindows`<sup>Optional</sup> <a name="OptimizationWindows" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.optimizationWindows"></a>

```go
OptimizationWindows *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#optimization_windows StatefulNodeAzure#optimization_windows}.

---

##### `PreferredLifeCycle`<sup>Optional</sup> <a name="PreferredLifeCycle" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.preferredLifeCycle"></a>

```go
PreferredLifeCycle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#preferred_life_cycle StatefulNodeAzure#preferred_life_cycle}.

---

##### `RevertToSpot`<sup>Optional</sup> <a name="RevertToSpot" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy.property.revertToSpot"></a>

```go
RevertToSpot StatefulNodeAzureStrategyRevertToSpot
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a>

revert_to_spot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#revert_to_spot StatefulNodeAzure#revert_to_spot}

---

### StatefulNodeAzureStrategyRevertToSpot <a name="StatefulNodeAzureStrategyRevertToSpot" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureStrategyRevertToSpot {
	PerformAt: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot.property.performAt">PerformAt</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#perform_at StatefulNodeAzure#perform_at}. |

---

##### `PerformAt`<sup>Required</sup> <a name="PerformAt" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot.property.performAt"></a>

```go
PerformAt *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#perform_at StatefulNodeAzure#perform_at}.

---

### StatefulNodeAzureTag <a name="StatefulNodeAzureTag" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureTag {
	TagKey: *string,
	TagValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag.property.tagKey">TagKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#tag_key StatefulNodeAzure#tag_key}. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag.property.tagValue">TagValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#tag_value StatefulNodeAzure#tag_value}. |

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#tag_key StatefulNodeAzure#tag_key}.

---

##### `TagValue`<sup>Optional</sup> <a name="TagValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTag.property.tagValue"></a>

```go
TagValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#tag_value StatefulNodeAzure#tag_value}.

---

### StatefulNodeAzureUpdateState <a name="StatefulNodeAzureUpdateState" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

&statefulnodeazure.StatefulNodeAzureUpdateState {
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#state StatefulNodeAzure#state}. |

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateState.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.116.0/docs/resources/stateful_node_azure#state StatefulNodeAzure#state}.

---

## Classes <a name="Classes" id="Classes"></a>

### StatefulNodeAzureAttachDataDiskList <a name="StatefulNodeAzureAttachDataDiskList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureAttachDataDiskList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatefulNodeAzureAttachDataDiskList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.get"></a>

```go
func Get(index *f64) StatefulNodeAzureAttachDataDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureAttachDataDiskOutputReference <a name="StatefulNodeAzureAttachDataDiskOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureAttachDataDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatefulNodeAzureAttachDataDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLun` <a name="ResetLun" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resetLun"></a>

```go
func ResetLun()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.resetZone"></a>

```go
func ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskNameInput">DataDiskNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskResourceGroupNameInput">DataDiskResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.lunInput">LunInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.sizeGbInput">SizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.storageAccountTypeInput">StorageAccountTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskName">DataDiskName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskResourceGroupName">DataDiskResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.lun">Lun</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.sizeGb">SizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.storageAccountType">StorageAccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataDiskNameInput`<sup>Optional</sup> <a name="DataDiskNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskNameInput"></a>

```go
func DataDiskNameInput() *string
```

- *Type:* *string

---

##### `DataDiskResourceGroupNameInput`<sup>Optional</sup> <a name="DataDiskResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskResourceGroupNameInput"></a>

```go
func DataDiskResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `LunInput`<sup>Optional</sup> <a name="LunInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.lunInput"></a>

```go
func LunInput() *f64
```

- *Type:* *f64

---

##### `SizeGbInput`<sup>Optional</sup> <a name="SizeGbInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.sizeGbInput"></a>

```go
func SizeGbInput() *f64
```

- *Type:* *f64

---

##### `StorageAccountTypeInput`<sup>Optional</sup> <a name="StorageAccountTypeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.storageAccountTypeInput"></a>

```go
func StorageAccountTypeInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `DataDiskName`<sup>Required</sup> <a name="DataDiskName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskName"></a>

```go
func DataDiskName() *string
```

- *Type:* *string

---

##### `DataDiskResourceGroupName`<sup>Required</sup> <a name="DataDiskResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.dataDiskResourceGroupName"></a>

```go
func DataDiskResourceGroupName() *string
```

- *Type:* *string

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.lun"></a>

```go
func Lun() *f64
```

- *Type:* *f64

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.sizeGb"></a>

```go
func SizeGb() *f64
```

- *Type:* *f64

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.storageAccountType"></a>

```go
func StorageAccountType() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureAttachDataDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureBootDiagnosticsList <a name="StatefulNodeAzureBootDiagnosticsList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureBootDiagnosticsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatefulNodeAzureBootDiagnosticsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.get"></a>

```go
func Get(index *f64) StatefulNodeAzureBootDiagnosticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureBootDiagnosticsOutputReference <a name="StatefulNodeAzureBootDiagnosticsOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureBootDiagnosticsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatefulNodeAzureBootDiagnosticsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```

##### `ResetStorageUrl` <a name="ResetStorageUrl" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resetStorageUrl"></a>

```go
func ResetStorageUrl()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.storageUrlInput">StorageUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.storageUrl">StorageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `StorageUrlInput`<sup>Optional</sup> <a name="StorageUrlInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.storageUrlInput"></a>

```go
func StorageUrlInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `StorageUrl`<sup>Required</sup> <a name="StorageUrl" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.storageUrl"></a>

```go
func StorageUrl() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureBootDiagnosticsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureDataDiskList <a name="StatefulNodeAzureDataDiskList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureDataDiskList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatefulNodeAzureDataDiskList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.get"></a>

```go
func Get(index *f64) StatefulNodeAzureDataDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureDataDiskOutputReference <a name="StatefulNodeAzureDataDiskOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureDataDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatefulNodeAzureDataDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.lunInput">LunInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.sizeGbInput">SizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.lun">Lun</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.sizeGb">SizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LunInput`<sup>Optional</sup> <a name="LunInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.lunInput"></a>

```go
func LunInput() *f64
```

- *Type:* *f64

---

##### `SizeGbInput`<sup>Optional</sup> <a name="SizeGbInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.sizeGbInput"></a>

```go
func SizeGbInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.lun"></a>

```go
func Lun() *f64
```

- *Type:* *f64

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.sizeGb"></a>

```go
func SizeGb() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDataDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureDeleteList <a name="StatefulNodeAzureDeleteList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureDeleteList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatefulNodeAzureDeleteList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.get"></a>

```go
func Get(index *f64) StatefulNodeAzureDeleteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureDeleteOutputReference <a name="StatefulNodeAzureDeleteOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureDeleteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatefulNodeAzureDeleteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskTtlInHours` <a name="ResetDiskTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetDiskTtlInHours"></a>

```go
func ResetDiskTtlInHours()
```

##### `ResetNetworkTtlInHours` <a name="ResetNetworkTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetNetworkTtlInHours"></a>

```go
func ResetNetworkTtlInHours()
```

##### `ResetPublicIpTtlInHours` <a name="ResetPublicIpTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetPublicIpTtlInHours"></a>

```go
func ResetPublicIpTtlInHours()
```

##### `ResetSnapshotTtlInHours` <a name="ResetSnapshotTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.resetSnapshotTtlInHours"></a>

```go
func ResetSnapshotTtlInHours()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskShouldDeallocateInput">DiskShouldDeallocateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskTtlInHoursInput">DiskTtlInHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkShouldDeallocateInput">NetworkShouldDeallocateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkTtlInHoursInput">NetworkTtlInHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpShouldDeallocateInput">PublicIpShouldDeallocateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpTtlInHoursInput">PublicIpTtlInHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.shouldTerminateVmInput">ShouldTerminateVmInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotShouldDeallocateInput">SnapshotShouldDeallocateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotTtlInHoursInput">SnapshotTtlInHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskShouldDeallocate">DiskShouldDeallocate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskTtlInHours">DiskTtlInHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkShouldDeallocate">NetworkShouldDeallocate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkTtlInHours">NetworkTtlInHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpShouldDeallocate">PublicIpShouldDeallocate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpTtlInHours">PublicIpTtlInHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.shouldTerminateVm">ShouldTerminateVm</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotShouldDeallocate">SnapshotShouldDeallocate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotTtlInHours">SnapshotTtlInHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskShouldDeallocateInput`<sup>Optional</sup> <a name="DiskShouldDeallocateInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskShouldDeallocateInput"></a>

```go
func DiskShouldDeallocateInput() interface{}
```

- *Type:* interface{}

---

##### `DiskTtlInHoursInput`<sup>Optional</sup> <a name="DiskTtlInHoursInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskTtlInHoursInput"></a>

```go
func DiskTtlInHoursInput() *f64
```

- *Type:* *f64

---

##### `NetworkShouldDeallocateInput`<sup>Optional</sup> <a name="NetworkShouldDeallocateInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkShouldDeallocateInput"></a>

```go
func NetworkShouldDeallocateInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkTtlInHoursInput`<sup>Optional</sup> <a name="NetworkTtlInHoursInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkTtlInHoursInput"></a>

```go
func NetworkTtlInHoursInput() *f64
```

- *Type:* *f64

---

##### `PublicIpShouldDeallocateInput`<sup>Optional</sup> <a name="PublicIpShouldDeallocateInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpShouldDeallocateInput"></a>

```go
func PublicIpShouldDeallocateInput() interface{}
```

- *Type:* interface{}

---

##### `PublicIpTtlInHoursInput`<sup>Optional</sup> <a name="PublicIpTtlInHoursInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpTtlInHoursInput"></a>

```go
func PublicIpTtlInHoursInput() *f64
```

- *Type:* *f64

---

##### `ShouldTerminateVmInput`<sup>Optional</sup> <a name="ShouldTerminateVmInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.shouldTerminateVmInput"></a>

```go
func ShouldTerminateVmInput() interface{}
```

- *Type:* interface{}

---

##### `SnapshotShouldDeallocateInput`<sup>Optional</sup> <a name="SnapshotShouldDeallocateInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotShouldDeallocateInput"></a>

```go
func SnapshotShouldDeallocateInput() interface{}
```

- *Type:* interface{}

---

##### `SnapshotTtlInHoursInput`<sup>Optional</sup> <a name="SnapshotTtlInHoursInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotTtlInHoursInput"></a>

```go
func SnapshotTtlInHoursInput() *f64
```

- *Type:* *f64

---

##### `DiskShouldDeallocate`<sup>Required</sup> <a name="DiskShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskShouldDeallocate"></a>

```go
func DiskShouldDeallocate() interface{}
```

- *Type:* interface{}

---

##### `DiskTtlInHours`<sup>Required</sup> <a name="DiskTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.diskTtlInHours"></a>

```go
func DiskTtlInHours() *f64
```

- *Type:* *f64

---

##### `NetworkShouldDeallocate`<sup>Required</sup> <a name="NetworkShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkShouldDeallocate"></a>

```go
func NetworkShouldDeallocate() interface{}
```

- *Type:* interface{}

---

##### `NetworkTtlInHours`<sup>Required</sup> <a name="NetworkTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.networkTtlInHours"></a>

```go
func NetworkTtlInHours() *f64
```

- *Type:* *f64

---

##### `PublicIpShouldDeallocate`<sup>Required</sup> <a name="PublicIpShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpShouldDeallocate"></a>

```go
func PublicIpShouldDeallocate() interface{}
```

- *Type:* interface{}

---

##### `PublicIpTtlInHours`<sup>Required</sup> <a name="PublicIpTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.publicIpTtlInHours"></a>

```go
func PublicIpTtlInHours() *f64
```

- *Type:* *f64

---

##### `ShouldTerminateVm`<sup>Required</sup> <a name="ShouldTerminateVm" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.shouldTerminateVm"></a>

```go
func ShouldTerminateVm() interface{}
```

- *Type:* interface{}

---

##### `SnapshotShouldDeallocate`<sup>Required</sup> <a name="SnapshotShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotShouldDeallocate"></a>

```go
func SnapshotShouldDeallocate() interface{}
```

- *Type:* interface{}

---

##### `SnapshotTtlInHours`<sup>Required</sup> <a name="SnapshotTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.snapshotTtlInHours"></a>

```go
func SnapshotTtlInHours() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDeleteOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureDetachDataDiskList <a name="StatefulNodeAzureDetachDataDiskList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureDetachDataDiskList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatefulNodeAzureDetachDataDiskList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.get"></a>

```go
func Get(index *f64) StatefulNodeAzureDetachDataDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureDetachDataDiskOutputReference <a name="StatefulNodeAzureDetachDataDiskOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureDetachDataDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatefulNodeAzureDetachDataDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTtlInHours` <a name="ResetTtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.resetTtlInHours"></a>

```go
func ResetTtlInHours()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskNameInput">DataDiskNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskResourceGroupNameInput">DataDiskResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.shouldDeallocateInput">ShouldDeallocateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.ttlInHoursInput">TtlInHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskName">DataDiskName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskResourceGroupName">DataDiskResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.shouldDeallocate">ShouldDeallocate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.ttlInHours">TtlInHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataDiskNameInput`<sup>Optional</sup> <a name="DataDiskNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskNameInput"></a>

```go
func DataDiskNameInput() *string
```

- *Type:* *string

---

##### `DataDiskResourceGroupNameInput`<sup>Optional</sup> <a name="DataDiskResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskResourceGroupNameInput"></a>

```go
func DataDiskResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ShouldDeallocateInput`<sup>Optional</sup> <a name="ShouldDeallocateInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.shouldDeallocateInput"></a>

```go
func ShouldDeallocateInput() interface{}
```

- *Type:* interface{}

---

##### `TtlInHoursInput`<sup>Optional</sup> <a name="TtlInHoursInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.ttlInHoursInput"></a>

```go
func TtlInHoursInput() *f64
```

- *Type:* *f64

---

##### `DataDiskName`<sup>Required</sup> <a name="DataDiskName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskName"></a>

```go
func DataDiskName() *string
```

- *Type:* *string

---

##### `DataDiskResourceGroupName`<sup>Required</sup> <a name="DataDiskResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.dataDiskResourceGroupName"></a>

```go
func DataDiskResourceGroupName() *string
```

- *Type:* *string

---

##### `ShouldDeallocate`<sup>Required</sup> <a name="ShouldDeallocate" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.shouldDeallocate"></a>

```go
func ShouldDeallocate() interface{}
```

- *Type:* interface{}

---

##### `TtlInHours`<sup>Required</sup> <a name="TtlInHours" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.ttlInHours"></a>

```go
func TtlInHours() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureDetachDataDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureExtensionList <a name="StatefulNodeAzureExtensionList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureExtensionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatefulNodeAzureExtensionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.get"></a>

```go
func Get(index *f64) StatefulNodeAzureExtensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureExtensionOutputReference <a name="StatefulNodeAzureExtensionOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureExtensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatefulNodeAzureExtensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProtectedSettings` <a name="ResetProtectedSettings" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resetProtectedSettings"></a>

```go
func ResetProtectedSettings()
```

##### `ResetPublicSettings` <a name="ResetPublicSettings" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.resetPublicSettings"></a>

```go
func ResetPublicSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.apiVersionInput">ApiVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.minorVersionAutoUpgradeInput">MinorVersionAutoUpgradeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.protectedSettingsInput">ProtectedSettingsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publicSettingsInput">PublicSettingsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publisherInput">PublisherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.apiVersion">ApiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.minorVersionAutoUpgrade">MinorVersionAutoUpgrade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.protectedSettings">ProtectedSettings</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publicSettings">PublicSettings</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiVersionInput`<sup>Optional</sup> <a name="ApiVersionInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.apiVersionInput"></a>

```go
func ApiVersionInput() *string
```

- *Type:* *string

---

##### `MinorVersionAutoUpgradeInput`<sup>Optional</sup> <a name="MinorVersionAutoUpgradeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.minorVersionAutoUpgradeInput"></a>

```go
func MinorVersionAutoUpgradeInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProtectedSettingsInput`<sup>Optional</sup> <a name="ProtectedSettingsInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.protectedSettingsInput"></a>

```go
func ProtectedSettingsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PublicSettingsInput`<sup>Optional</sup> <a name="PublicSettingsInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publicSettingsInput"></a>

```go
func PublicSettingsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publisherInput"></a>

```go
func PublisherInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.apiVersion"></a>

```go
func ApiVersion() *string
```

- *Type:* *string

---

##### `MinorVersionAutoUpgrade`<sup>Required</sup> <a name="MinorVersionAutoUpgrade" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.minorVersionAutoUpgrade"></a>

```go
func MinorVersionAutoUpgrade() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProtectedSettings`<sup>Required</sup> <a name="ProtectedSettings" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.protectedSettings"></a>

```go
func ProtectedSettings() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PublicSettings`<sup>Required</sup> <a name="PublicSettings" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publicSettings"></a>

```go
func PublicSettings() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureExtensionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureHealthOutputReference <a name="StatefulNodeAzureHealthOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureHealthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StatefulNodeAzureHealthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGracePeriod` <a name="ResetGracePeriod" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resetGracePeriod"></a>

```go
func ResetGracePeriod()
```

##### `ResetUnhealthyDuration` <a name="ResetUnhealthyDuration" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.resetUnhealthyDuration"></a>

```go
func ResetUnhealthyDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.autoHealingInput">AutoHealingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.gracePeriodInput">GracePeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.healthCheckTypesInput">HealthCheckTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.unhealthyDurationInput">UnhealthyDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.autoHealing">AutoHealing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.gracePeriod">GracePeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.healthCheckTypes">HealthCheckTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.unhealthyDuration">UnhealthyDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoHealingInput`<sup>Optional</sup> <a name="AutoHealingInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.autoHealingInput"></a>

```go
func AutoHealingInput() interface{}
```

- *Type:* interface{}

---

##### `GracePeriodInput`<sup>Optional</sup> <a name="GracePeriodInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.gracePeriodInput"></a>

```go
func GracePeriodInput() *f64
```

- *Type:* *f64

---

##### `HealthCheckTypesInput`<sup>Optional</sup> <a name="HealthCheckTypesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.healthCheckTypesInput"></a>

```go
func HealthCheckTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `UnhealthyDurationInput`<sup>Optional</sup> <a name="UnhealthyDurationInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.unhealthyDurationInput"></a>

```go
func UnhealthyDurationInput() *f64
```

- *Type:* *f64

---

##### `AutoHealing`<sup>Required</sup> <a name="AutoHealing" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.autoHealing"></a>

```go
func AutoHealing() interface{}
```

- *Type:* interface{}

---

##### `GracePeriod`<sup>Required</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.gracePeriod"></a>

```go
func GracePeriod() *f64
```

- *Type:* *f64

---

##### `HealthCheckTypes`<sup>Required</sup> <a name="HealthCheckTypes" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.healthCheckTypes"></a>

```go
func HealthCheckTypes() *[]*string
```

- *Type:* *[]*string

---

##### `UnhealthyDuration`<sup>Required</sup> <a name="UnhealthyDuration" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.unhealthyDuration"></a>

```go
func UnhealthyDuration() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealthOutputReference.property.internalValue"></a>

```go
func InternalValue() StatefulNodeAzureHealth
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureHealth">StatefulNodeAzureHealth</a>

---


### StatefulNodeAzureImageCustomImageList <a name="StatefulNodeAzureImageCustomImageList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureImageCustomImageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatefulNodeAzureImageCustomImageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.get"></a>

```go
func Get(index *f64) StatefulNodeAzureImageCustomImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureImageCustomImageOutputReference <a name="StatefulNodeAzureImageCustomImageOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureImageCustomImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatefulNodeAzureImageCustomImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.customImageResourceGroupNameInput">CustomImageResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.customImageResourceGroupName">CustomImageResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomImageResourceGroupNameInput`<sup>Optional</sup> <a name="CustomImageResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.customImageResourceGroupNameInput"></a>

```go
func CustomImageResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `CustomImageResourceGroupName`<sup>Required</sup> <a name="CustomImageResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.customImageResourceGroupName"></a>

```go
func CustomImageResourceGroupName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureImageGalleryList <a name="StatefulNodeAzureImageGalleryList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureImageGalleryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatefulNodeAzureImageGalleryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.get"></a>

```go
func Get(index *f64) StatefulNodeAzureImageGalleryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureImageGalleryOutputReference <a name="StatefulNodeAzureImageGalleryOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureImageGalleryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatefulNodeAzureImageGalleryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryNameInput">GalleryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryResourceGroupNameInput">GalleryResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.versionNameInput">VersionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryName">GalleryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryResourceGroupName">GalleryResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.imageName">ImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.versionName">VersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GalleryNameInput`<sup>Optional</sup> <a name="GalleryNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryNameInput"></a>

```go
func GalleryNameInput() *string
```

- *Type:* *string

---

##### `GalleryResourceGroupNameInput`<sup>Optional</sup> <a name="GalleryResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryResourceGroupNameInput"></a>

```go
func GalleryResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.imageNameInput"></a>

```go
func ImageNameInput() *string
```

- *Type:* *string

---

##### `VersionNameInput`<sup>Optional</sup> <a name="VersionNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.versionNameInput"></a>

```go
func VersionNameInput() *string
```

- *Type:* *string

---

##### `GalleryName`<sup>Required</sup> <a name="GalleryName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryName"></a>

```go
func GalleryName() *string
```

- *Type:* *string

---

##### `GalleryResourceGroupName`<sup>Required</sup> <a name="GalleryResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.galleryResourceGroupName"></a>

```go
func GalleryResourceGroupName() *string
```

- *Type:* *string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.imageName"></a>

```go
func ImageName() *string
```

- *Type:* *string

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.versionName"></a>

```go
func VersionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureImageMarketplaceImageList <a name="StatefulNodeAzureImageMarketplaceImageList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureImageMarketplaceImageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatefulNodeAzureImageMarketplaceImageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.get"></a>

```go
func Get(index *f64) StatefulNodeAzureImageMarketplaceImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureImageMarketplaceImageOutputReference <a name="StatefulNodeAzureImageMarketplaceImageOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureImageMarketplaceImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatefulNodeAzureImageMarketplaceImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.offerInput">OfferInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.publisherInput">PublisherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.skuInput">SkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.offer">Offer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OfferInput`<sup>Optional</sup> <a name="OfferInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.offerInput"></a>

```go
func OfferInput() *string
```

- *Type:* *string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.publisherInput"></a>

```go
func PublisherInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.skuInput"></a>

```go
func SkuInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.offer"></a>

```go
func Offer() *string
```

- *Type:* *string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureImageOutputReference <a name="StatefulNodeAzureImageOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StatefulNodeAzureImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomImage` <a name="PutCustomImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putCustomImage"></a>

```go
func PutCustomImage(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putCustomImage.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGallery` <a name="PutGallery" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putGallery"></a>

```go
func PutGallery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putGallery.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMarketplaceImage` <a name="PutMarketplaceImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putMarketplaceImage"></a>

```go
func PutMarketplaceImage(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.putMarketplaceImage.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomImage` <a name="ResetCustomImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resetCustomImage"></a>

```go
func ResetCustomImage()
```

##### `ResetGallery` <a name="ResetGallery" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resetGallery"></a>

```go
func ResetGallery()
```

##### `ResetMarketplaceImage` <a name="ResetMarketplaceImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.resetMarketplaceImage"></a>

```go
func ResetMarketplaceImage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.customImage">CustomImage</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList">StatefulNodeAzureImageCustomImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.gallery">Gallery</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList">StatefulNodeAzureImageGalleryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.marketplaceImage">MarketplaceImage</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList">StatefulNodeAzureImageMarketplaceImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.customImageInput">CustomImageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.galleryInput">GalleryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.marketplaceImageInput">MarketplaceImageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomImage`<sup>Required</sup> <a name="CustomImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.customImage"></a>

```go
func CustomImage() StatefulNodeAzureImageCustomImageList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageCustomImageList">StatefulNodeAzureImageCustomImageList</a>

---

##### `Gallery`<sup>Required</sup> <a name="Gallery" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.gallery"></a>

```go
func Gallery() StatefulNodeAzureImageGalleryList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageGalleryList">StatefulNodeAzureImageGalleryList</a>

---

##### `MarketplaceImage`<sup>Required</sup> <a name="MarketplaceImage" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.marketplaceImage"></a>

```go
func MarketplaceImage() StatefulNodeAzureImageMarketplaceImageList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageMarketplaceImageList">StatefulNodeAzureImageMarketplaceImageList</a>

---

##### `CustomImageInput`<sup>Optional</sup> <a name="CustomImageInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.customImageInput"></a>

```go
func CustomImageInput() interface{}
```

- *Type:* interface{}

---

##### `GalleryInput`<sup>Optional</sup> <a name="GalleryInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.galleryInput"></a>

```go
func GalleryInput() interface{}
```

- *Type:* interface{}

---

##### `MarketplaceImageInput`<sup>Optional</sup> <a name="MarketplaceImageInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.marketplaceImageInput"></a>

```go
func MarketplaceImageInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImageOutputReference.property.internalValue"></a>

```go
func InternalValue() StatefulNodeAzureImage
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImage">StatefulNodeAzureImage</a>

---


### StatefulNodeAzureImportVmList <a name="StatefulNodeAzureImportVmList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureImportVmList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatefulNodeAzureImportVmList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.get"></a>

```go
func Get(index *f64) StatefulNodeAzureImportVmOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureImportVmOutputReference <a name="StatefulNodeAzureImportVmOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureImportVmOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatefulNodeAzureImportVmOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDrainingTimeout` <a name="ResetDrainingTimeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resetDrainingTimeout"></a>

```go
func ResetDrainingTimeout()
```

##### `ResetResourcesRetentionTime` <a name="ResetResourcesRetentionTime" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.resetResourcesRetentionTime"></a>

```go
func ResetResourcesRetentionTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.drainingTimeoutInput">DrainingTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.originalVmNameInput">OriginalVmNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourcesRetentionTimeInput">ResourcesRetentionTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.drainingTimeout">DrainingTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.originalVmName">OriginalVmName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourcesRetentionTime">ResourcesRetentionTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DrainingTimeoutInput`<sup>Optional</sup> <a name="DrainingTimeoutInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.drainingTimeoutInput"></a>

```go
func DrainingTimeoutInput() *f64
```

- *Type:* *f64

---

##### `OriginalVmNameInput`<sup>Optional</sup> <a name="OriginalVmNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.originalVmNameInput"></a>

```go
func OriginalVmNameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ResourcesRetentionTimeInput`<sup>Optional</sup> <a name="ResourcesRetentionTimeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourcesRetentionTimeInput"></a>

```go
func ResourcesRetentionTimeInput() *f64
```

- *Type:* *f64

---

##### `DrainingTimeout`<sup>Required</sup> <a name="DrainingTimeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.drainingTimeout"></a>

```go
func DrainingTimeout() *f64
```

- *Type:* *f64

---

##### `OriginalVmName`<sup>Required</sup> <a name="OriginalVmName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.originalVmName"></a>

```go
func OriginalVmName() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `ResourcesRetentionTime`<sup>Required</sup> <a name="ResourcesRetentionTime" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.resourcesRetentionTime"></a>

```go
func ResourcesRetentionTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureImportVmOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureLoadBalancerList <a name="StatefulNodeAzureLoadBalancerList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureLoadBalancerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatefulNodeAzureLoadBalancerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.get"></a>

```go
func Get(index *f64) StatefulNodeAzureLoadBalancerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureLoadBalancerOutputReference <a name="StatefulNodeAzureLoadBalancerOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureLoadBalancerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatefulNodeAzureLoadBalancerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSku` <a name="ResetSku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.resetSku"></a>

```go
func ResetSku()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.backendPoolNamesInput">BackendPoolNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.skuInput">SkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.backendPoolNames">BackendPoolNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackendPoolNamesInput`<sup>Optional</sup> <a name="BackendPoolNamesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.backendPoolNamesInput"></a>

```go
func BackendPoolNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.skuInput"></a>

```go
func SkuInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `BackendPoolNames`<sup>Required</sup> <a name="BackendPoolNames" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.backendPoolNames"></a>

```go
func BackendPoolNames() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoadBalancerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureLoginOutputReference <a name="StatefulNodeAzureLoginOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureLoginOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StatefulNodeAzureLoginOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetSshPublicKey` <a name="ResetSshPublicKey" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.resetSshPublicKey"></a>

```go
func ResetSshPublicKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.sshPublicKeyInput">SshPublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.sshPublicKey">SshPublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `SshPublicKeyInput`<sup>Optional</sup> <a name="SshPublicKeyInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.sshPublicKeyInput"></a>

```go
func SshPublicKeyInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `SshPublicKey`<sup>Required</sup> <a name="SshPublicKey" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.sshPublicKey"></a>

```go
func SshPublicKey() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLoginOutputReference.property.internalValue"></a>

```go
func InternalValue() StatefulNodeAzureLogin
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureLogin">StatefulNodeAzureLogin</a>

---


### StatefulNodeAzureManagedServiceIdentitiesList <a name="StatefulNodeAzureManagedServiceIdentitiesList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureManagedServiceIdentitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatefulNodeAzureManagedServiceIdentitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.get"></a>

```go
func Get(index *f64) StatefulNodeAzureManagedServiceIdentitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureManagedServiceIdentitiesOutputReference <a name="StatefulNodeAzureManagedServiceIdentitiesOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureManagedServiceIdentitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatefulNodeAzureManagedServiceIdentitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureManagedServiceIdentitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList <a name="StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.get"></a>

```go
func Get(index *f64) StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference <a name="StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.privateIpAddressVersionInput">PrivateIpAddressVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.privateIpAddressVersion">PrivateIpAddressVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrivateIpAddressVersionInput`<sup>Optional</sup> <a name="PrivateIpAddressVersionInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.privateIpAddressVersionInput"></a>

```go
func PrivateIpAddressVersionInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateIpAddressVersion`<sup>Required</sup> <a name="PrivateIpAddressVersion" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.privateIpAddressVersion"></a>

```go
func PrivateIpAddressVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList <a name="StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.get"></a>

```go
func Get(index *f64) StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference <a name="StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.networkResourceGroupNameInput">NetworkResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.networkResourceGroupName">NetworkResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkResourceGroupNameInput`<sup>Optional</sup> <a name="NetworkResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.networkResourceGroupNameInput"></a>

```go
func NetworkResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkResourceGroupName`<sup>Required</sup> <a name="NetworkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.networkResourceGroupName"></a>

```go
func NetworkResourceGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureNetworkNetworkInterfaceList <a name="StatefulNodeAzureNetworkNetworkInterfaceList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureNetworkNetworkInterfaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatefulNodeAzureNetworkNetworkInterfaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.get"></a>

```go
func Get(index *f64) StatefulNodeAzureNetworkNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList <a name="StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.get"></a>

```go
func Get(index *f64) StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference <a name="StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNetworkResourceGroupName` <a name="ResetNetworkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.resetNetworkResourceGroupName"></a>

```go
func ResetNetworkResourceGroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.networkResourceGroupNameInput">NetworkResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.networkResourceGroupName">NetworkResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkResourceGroupNameInput`<sup>Optional</sup> <a name="NetworkResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.networkResourceGroupNameInput"></a>

```go
func NetworkResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkResourceGroupName`<sup>Required</sup> <a name="NetworkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.networkResourceGroupName"></a>

```go
func NetworkResourceGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureNetworkNetworkInterfaceOutputReference <a name="StatefulNodeAzureNetworkNetworkInterfaceOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureNetworkNetworkInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatefulNodeAzureNetworkNetworkInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalIpConfigurations` <a name="PutAdditionalIpConfigurations" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putAdditionalIpConfigurations"></a>

```go
func PutAdditionalIpConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putAdditionalIpConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutApplicationSecurityGroups` <a name="PutApplicationSecurityGroups" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putApplicationSecurityGroups"></a>

```go
func PutApplicationSecurityGroups(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putApplicationSecurityGroups.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetworkSecurityGroup` <a name="PutNetworkSecurityGroup" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putNetworkSecurityGroup"></a>

```go
func PutNetworkSecurityGroup(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putNetworkSecurityGroup.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPublicIps` <a name="PutPublicIps" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putPublicIps"></a>

```go
func PutPublicIps(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.putPublicIps.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalIpConfigurations` <a name="ResetAdditionalIpConfigurations" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetAdditionalIpConfigurations"></a>

```go
func ResetAdditionalIpConfigurations()
```

##### `ResetApplicationSecurityGroups` <a name="ResetApplicationSecurityGroups" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetApplicationSecurityGroups"></a>

```go
func ResetApplicationSecurityGroups()
```

##### `ResetAssignPublicIp` <a name="ResetAssignPublicIp" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetAssignPublicIp"></a>

```go
func ResetAssignPublicIp()
```

##### `ResetEnableIpForwarding` <a name="ResetEnableIpForwarding" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetEnableIpForwarding"></a>

```go
func ResetEnableIpForwarding()
```

##### `ResetNetworkSecurityGroup` <a name="ResetNetworkSecurityGroup" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetNetworkSecurityGroup"></a>

```go
func ResetNetworkSecurityGroup()
```

##### `ResetPrivateIpAddresses` <a name="ResetPrivateIpAddresses" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetPrivateIpAddresses"></a>

```go
func ResetPrivateIpAddresses()
```

##### `ResetPublicIps` <a name="ResetPublicIps" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetPublicIps"></a>

```go
func ResetPublicIps()
```

##### `ResetPublicIpSku` <a name="ResetPublicIpSku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.resetPublicIpSku"></a>

```go
func ResetPublicIpSku()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.additionalIpConfigurations">AdditionalIpConfigurations</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.applicationSecurityGroups">ApplicationSecurityGroups</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.networkSecurityGroup">NetworkSecurityGroup</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIps">PublicIps</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList">StatefulNodeAzureNetworkNetworkInterfacePublicIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.additionalIpConfigurationsInput">AdditionalIpConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.applicationSecurityGroupsInput">ApplicationSecurityGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.assignPublicIpInput">AssignPublicIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.enableIpForwardingInput">EnableIpForwardingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.isPrimaryInput">IsPrimaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.networkSecurityGroupInput">NetworkSecurityGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.privateIpAddressesInput">PrivateIpAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIpsInput">PublicIpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIpSkuInput">PublicIpSkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.subnetNameInput">SubnetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.assignPublicIp">AssignPublicIp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.enableIpForwarding">EnableIpForwarding</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.isPrimary">IsPrimary</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.privateIpAddresses">PrivateIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIpSku">PublicIpSku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.subnetName">SubnetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalIpConfigurations`<sup>Required</sup> <a name="AdditionalIpConfigurations" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.additionalIpConfigurations"></a>

```go
func AdditionalIpConfigurations() StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList">StatefulNodeAzureNetworkNetworkInterfaceAdditionalIpConfigurationsList</a>

---

##### `ApplicationSecurityGroups`<sup>Required</sup> <a name="ApplicationSecurityGroups" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.applicationSecurityGroups"></a>

```go
func ApplicationSecurityGroups() StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList">StatefulNodeAzureNetworkNetworkInterfaceApplicationSecurityGroupsList</a>

---

##### `NetworkSecurityGroup`<sup>Required</sup> <a name="NetworkSecurityGroup" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.networkSecurityGroup"></a>

```go
func NetworkSecurityGroup() StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList">StatefulNodeAzureNetworkNetworkInterfaceNetworkSecurityGroupList</a>

---

##### `PublicIps`<sup>Required</sup> <a name="PublicIps" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIps"></a>

```go
func PublicIps() StatefulNodeAzureNetworkNetworkInterfacePublicIpsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList">StatefulNodeAzureNetworkNetworkInterfacePublicIpsList</a>

---

##### `AdditionalIpConfigurationsInput`<sup>Optional</sup> <a name="AdditionalIpConfigurationsInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.additionalIpConfigurationsInput"></a>

```go
func AdditionalIpConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationSecurityGroupsInput`<sup>Optional</sup> <a name="ApplicationSecurityGroupsInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.applicationSecurityGroupsInput"></a>

```go
func ApplicationSecurityGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `AssignPublicIpInput`<sup>Optional</sup> <a name="AssignPublicIpInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.assignPublicIpInput"></a>

```go
func AssignPublicIpInput() interface{}
```

- *Type:* interface{}

---

##### `EnableIpForwardingInput`<sup>Optional</sup> <a name="EnableIpForwardingInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.enableIpForwardingInput"></a>

```go
func EnableIpForwardingInput() interface{}
```

- *Type:* interface{}

---

##### `IsPrimaryInput`<sup>Optional</sup> <a name="IsPrimaryInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.isPrimaryInput"></a>

```go
func IsPrimaryInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkSecurityGroupInput`<sup>Optional</sup> <a name="NetworkSecurityGroupInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.networkSecurityGroupInput"></a>

```go
func NetworkSecurityGroupInput() interface{}
```

- *Type:* interface{}

---

##### `PrivateIpAddressesInput`<sup>Optional</sup> <a name="PrivateIpAddressesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.privateIpAddressesInput"></a>

```go
func PrivateIpAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PublicIpsInput`<sup>Optional</sup> <a name="PublicIpsInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIpsInput"></a>

```go
func PublicIpsInput() interface{}
```

- *Type:* interface{}

---

##### `PublicIpSkuInput`<sup>Optional</sup> <a name="PublicIpSkuInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIpSkuInput"></a>

```go
func PublicIpSkuInput() *string
```

- *Type:* *string

---

##### `SubnetNameInput`<sup>Optional</sup> <a name="SubnetNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.subnetNameInput"></a>

```go
func SubnetNameInput() *string
```

- *Type:* *string

---

##### `AssignPublicIp`<sup>Required</sup> <a name="AssignPublicIp" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.assignPublicIp"></a>

```go
func AssignPublicIp() interface{}
```

- *Type:* interface{}

---

##### `EnableIpForwarding`<sup>Required</sup> <a name="EnableIpForwarding" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.enableIpForwarding"></a>

```go
func EnableIpForwarding() interface{}
```

- *Type:* interface{}

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.isPrimary"></a>

```go
func IsPrimary() interface{}
```

- *Type:* interface{}

---

##### `PrivateIpAddresses`<sup>Required</sup> <a name="PrivateIpAddresses" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.privateIpAddresses"></a>

```go
func PrivateIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `PublicIpSku`<sup>Required</sup> <a name="PublicIpSku" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.publicIpSku"></a>

```go
func PublicIpSku() *string
```

- *Type:* *string

---

##### `SubnetName`<sup>Required</sup> <a name="SubnetName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.subnetName"></a>

```go
func SubnetName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureNetworkNetworkInterfacePublicIpsList <a name="StatefulNodeAzureNetworkNetworkInterfacePublicIpsList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureNetworkNetworkInterfacePublicIpsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatefulNodeAzureNetworkNetworkInterfacePublicIpsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.get"></a>

```go
func Get(index *f64) StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference <a name="StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.networkResourceGroupNameInput">NetworkResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.networkResourceGroupName">NetworkResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkResourceGroupNameInput`<sup>Optional</sup> <a name="NetworkResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.networkResourceGroupNameInput"></a>

```go
func NetworkResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkResourceGroupName`<sup>Required</sup> <a name="NetworkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.networkResourceGroupName"></a>

```go
func NetworkResourceGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfacePublicIpsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureNetworkOutputReference <a name="StatefulNodeAzureNetworkOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StatefulNodeAzureNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.putNetworkInterface"></a>

```go
func PutNetworkInterface(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.putNetworkInterface.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList">StatefulNodeAzureNetworkNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkResourceGroupNameInput">NetworkResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.virtualNetworkNameInput">VirtualNetworkNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkResourceGroupName">NetworkResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.virtualNetworkName">VirtualNetworkName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkInterface"></a>

```go
func NetworkInterface() StatefulNodeAzureNetworkNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkNetworkInterfaceList">StatefulNodeAzureNetworkNetworkInterfaceList</a>

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkInterfaceInput"></a>

```go
func NetworkInterfaceInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkResourceGroupNameInput`<sup>Optional</sup> <a name="NetworkResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkResourceGroupNameInput"></a>

```go
func NetworkResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `VirtualNetworkNameInput`<sup>Optional</sup> <a name="VirtualNetworkNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.virtualNetworkNameInput"></a>

```go
func VirtualNetworkNameInput() *string
```

- *Type:* *string

---

##### `NetworkResourceGroupName`<sup>Required</sup> <a name="NetworkResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.networkResourceGroupName"></a>

```go
func NetworkResourceGroupName() *string
```

- *Type:* *string

---

##### `VirtualNetworkName`<sup>Required</sup> <a name="VirtualNetworkName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.virtualNetworkName"></a>

```go
func VirtualNetworkName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() StatefulNodeAzureNetwork
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureNetwork">StatefulNodeAzureNetwork</a>

---


### StatefulNodeAzureOsDiskOutputReference <a name="StatefulNodeAzureOsDiskOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureOsDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StatefulNodeAzureOsDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSizeGb` <a name="ResetSizeGb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.resetSizeGb"></a>

```go
func ResetSizeGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.sizeGbInput">SizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.sizeGb">SizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SizeGbInput`<sup>Optional</sup> <a name="SizeGbInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.sizeGbInput"></a>

```go
func SizeGbInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.sizeGb"></a>

```go
func SizeGb() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() StatefulNodeAzureOsDisk
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureOsDisk">StatefulNodeAzureOsDisk</a>

---


### StatefulNodeAzureSchedulingTaskList <a name="StatefulNodeAzureSchedulingTaskList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureSchedulingTaskList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatefulNodeAzureSchedulingTaskList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.get"></a>

```go
func Get(index *f64) StatefulNodeAzureSchedulingTaskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureSchedulingTaskOutputReference <a name="StatefulNodeAzureSchedulingTaskOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureSchedulingTaskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatefulNodeAzureSchedulingTaskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.cronExpression">CronExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.cronExpressionInput"></a>

```go
func CronExpressionInput() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.cronExpression"></a>

```go
func CronExpression() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSchedulingTaskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureSecretList <a name="StatefulNodeAzureSecretList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureSecretList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatefulNodeAzureSecretList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.get"></a>

```go
func Get(index *f64) StatefulNodeAzureSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureSecretOutputReference <a name="StatefulNodeAzureSecretOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatefulNodeAzureSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourceVault` <a name="PutSourceVault" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.putSourceVault"></a>

```go
func PutSourceVault(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.putSourceVault.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVaultCertificates` <a name="PutVaultCertificates" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.putVaultCertificates"></a>

```go
func PutVaultCertificates(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.putVaultCertificates.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.sourceVault">SourceVault</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList">StatefulNodeAzureSecretSourceVaultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.vaultCertificates">VaultCertificates</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList">StatefulNodeAzureSecretVaultCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.sourceVaultInput">SourceVaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.vaultCertificatesInput">VaultCertificatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceVault`<sup>Required</sup> <a name="SourceVault" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.sourceVault"></a>

```go
func SourceVault() StatefulNodeAzureSecretSourceVaultList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList">StatefulNodeAzureSecretSourceVaultList</a>

---

##### `VaultCertificates`<sup>Required</sup> <a name="VaultCertificates" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.vaultCertificates"></a>

```go
func VaultCertificates() StatefulNodeAzureSecretVaultCertificatesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList">StatefulNodeAzureSecretVaultCertificatesList</a>

---

##### `SourceVaultInput`<sup>Optional</sup> <a name="SourceVaultInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.sourceVaultInput"></a>

```go
func SourceVaultInput() interface{}
```

- *Type:* interface{}

---

##### `VaultCertificatesInput`<sup>Optional</sup> <a name="VaultCertificatesInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.vaultCertificatesInput"></a>

```go
func VaultCertificatesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureSecretSourceVaultList <a name="StatefulNodeAzureSecretSourceVaultList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureSecretSourceVaultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatefulNodeAzureSecretSourceVaultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.get"></a>

```go
func Get(index *f64) StatefulNodeAzureSecretSourceVaultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureSecretSourceVaultOutputReference <a name="StatefulNodeAzureSecretSourceVaultOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureSecretSourceVaultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatefulNodeAzureSecretSourceVaultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretSourceVaultOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureSecretVaultCertificatesList <a name="StatefulNodeAzureSecretVaultCertificatesList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureSecretVaultCertificatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatefulNodeAzureSecretVaultCertificatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.get"></a>

```go
func Get(index *f64) StatefulNodeAzureSecretVaultCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureSecretVaultCertificatesOutputReference <a name="StatefulNodeAzureSecretVaultCertificatesOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureSecretVaultCertificatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatefulNodeAzureSecretVaultCertificatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateStore` <a name="ResetCertificateStore" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resetCertificateStore"></a>

```go
func ResetCertificateStore()
```

##### `ResetCertificateUrl` <a name="ResetCertificateUrl" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.resetCertificateUrl"></a>

```go
func ResetCertificateUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateStoreInput">CertificateStoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateUrlInput">CertificateUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateStore">CertificateStore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateUrl">CertificateUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateStoreInput`<sup>Optional</sup> <a name="CertificateStoreInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateStoreInput"></a>

```go
func CertificateStoreInput() *string
```

- *Type:* *string

---

##### `CertificateUrlInput`<sup>Optional</sup> <a name="CertificateUrlInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateUrlInput"></a>

```go
func CertificateUrlInput() *string
```

- *Type:* *string

---

##### `CertificateStore`<sup>Required</sup> <a name="CertificateStore" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateStore"></a>

```go
func CertificateStore() *string
```

- *Type:* *string

---

##### `CertificateUrl`<sup>Required</sup> <a name="CertificateUrl" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.certificateUrl"></a>

```go
func CertificateUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSecretVaultCertificatesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureSignalList <a name="StatefulNodeAzureSignalList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureSignalList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatefulNodeAzureSignalList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.get"></a>

```go
func Get(index *f64) StatefulNodeAzureSignalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureSignalOutputReference <a name="StatefulNodeAzureSignalOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureSignalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatefulNodeAzureSignalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureSignalOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureStrategyOutputReference <a name="StatefulNodeAzureStrategyOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StatefulNodeAzureStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRevertToSpot` <a name="PutRevertToSpot" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.putRevertToSpot"></a>

```go
func PutRevertToSpot(value StatefulNodeAzureStrategyRevertToSpot)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.putRevertToSpot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a>

---

##### `ResetDrainingTimeout` <a name="ResetDrainingTimeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetDrainingTimeout"></a>

```go
func ResetDrainingTimeout()
```

##### `ResetOptimizationWindows` <a name="ResetOptimizationWindows" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetOptimizationWindows"></a>

```go
func ResetOptimizationWindows()
```

##### `ResetPreferredLifeCycle` <a name="ResetPreferredLifeCycle" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetPreferredLifeCycle"></a>

```go
func ResetPreferredLifeCycle()
```

##### `ResetRevertToSpot` <a name="ResetRevertToSpot" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.resetRevertToSpot"></a>

```go
func ResetRevertToSpot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.revertToSpot">RevertToSpot</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference">StatefulNodeAzureStrategyRevertToSpotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.drainingTimeoutInput">DrainingTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.fallbackToOnDemandInput">FallbackToOnDemandInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.optimizationWindowsInput">OptimizationWindowsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.preferredLifeCycleInput">PreferredLifeCycleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.revertToSpotInput">RevertToSpotInput</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.drainingTimeout">DrainingTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.fallbackToOnDemand">FallbackToOnDemand</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.optimizationWindows">OptimizationWindows</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.preferredLifeCycle">PreferredLifeCycle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RevertToSpot`<sup>Required</sup> <a name="RevertToSpot" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.revertToSpot"></a>

```go
func RevertToSpot() StatefulNodeAzureStrategyRevertToSpotOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference">StatefulNodeAzureStrategyRevertToSpotOutputReference</a>

---

##### `DrainingTimeoutInput`<sup>Optional</sup> <a name="DrainingTimeoutInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.drainingTimeoutInput"></a>

```go
func DrainingTimeoutInput() *f64
```

- *Type:* *f64

---

##### `FallbackToOnDemandInput`<sup>Optional</sup> <a name="FallbackToOnDemandInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.fallbackToOnDemandInput"></a>

```go
func FallbackToOnDemandInput() interface{}
```

- *Type:* interface{}

---

##### `OptimizationWindowsInput`<sup>Optional</sup> <a name="OptimizationWindowsInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.optimizationWindowsInput"></a>

```go
func OptimizationWindowsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PreferredLifeCycleInput`<sup>Optional</sup> <a name="PreferredLifeCycleInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.preferredLifeCycleInput"></a>

```go
func PreferredLifeCycleInput() *string
```

- *Type:* *string

---

##### `RevertToSpotInput`<sup>Optional</sup> <a name="RevertToSpotInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.revertToSpotInput"></a>

```go
func RevertToSpotInput() StatefulNodeAzureStrategyRevertToSpot
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a>

---

##### `DrainingTimeout`<sup>Required</sup> <a name="DrainingTimeout" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.drainingTimeout"></a>

```go
func DrainingTimeout() *f64
```

- *Type:* *f64

---

##### `FallbackToOnDemand`<sup>Required</sup> <a name="FallbackToOnDemand" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.fallbackToOnDemand"></a>

```go
func FallbackToOnDemand() interface{}
```

- *Type:* interface{}

---

##### `OptimizationWindows`<sup>Required</sup> <a name="OptimizationWindows" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.optimizationWindows"></a>

```go
func OptimizationWindows() *[]*string
```

- *Type:* *[]*string

---

##### `PreferredLifeCycle`<sup>Required</sup> <a name="PreferredLifeCycle" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.preferredLifeCycle"></a>

```go
func PreferredLifeCycle() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() StatefulNodeAzureStrategy
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategy">StatefulNodeAzureStrategy</a>

---


### StatefulNodeAzureStrategyRevertToSpotOutputReference <a name="StatefulNodeAzureStrategyRevertToSpotOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureStrategyRevertToSpotOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StatefulNodeAzureStrategyRevertToSpotOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.performAtInput">PerformAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.performAt">PerformAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PerformAtInput`<sup>Optional</sup> <a name="PerformAtInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.performAtInput"></a>

```go
func PerformAtInput() *string
```

- *Type:* *string

---

##### `PerformAt`<sup>Required</sup> <a name="PerformAt" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.performAt"></a>

```go
func PerformAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpotOutputReference.property.internalValue"></a>

```go
func InternalValue() StatefulNodeAzureStrategyRevertToSpot
```

- *Type:* <a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureStrategyRevertToSpot">StatefulNodeAzureStrategyRevertToSpot</a>

---


### StatefulNodeAzureTagList <a name="StatefulNodeAzureTagList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatefulNodeAzureTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.get"></a>

```go
func Get(index *f64) StatefulNodeAzureTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureTagOutputReference <a name="StatefulNodeAzureTagOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatefulNodeAzureTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTagValue` <a name="ResetTagValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.resetTagValue"></a>

```go
func ResetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagValueInput">TagValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagValue">TagValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `TagValueInput`<sup>Optional</sup> <a name="TagValueInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagValueInput"></a>

```go
func TagValueInput() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.tagValue"></a>

```go
func TagValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureUpdateStateList <a name="StatefulNodeAzureUpdateStateList" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureUpdateStateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatefulNodeAzureUpdateStateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.get"></a>

```go
func Get(index *f64) StatefulNodeAzureUpdateStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatefulNodeAzureUpdateStateOutputReference <a name="StatefulNodeAzureUpdateStateOutputReference" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v7/statefulnodeazure"

statefulnodeazure.NewStatefulNodeAzureUpdateStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatefulNodeAzureUpdateStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.statefulNodeAzure.StatefulNodeAzureUpdateStateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



